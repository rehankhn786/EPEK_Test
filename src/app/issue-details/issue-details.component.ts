import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import * as data from "../data.json"
import Swal from 'sweetalert2';
import { EditIssueComponent } from '../edit-issue/edit-issue.component';
@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {

  rows: any[]=[]
  headers:string[]=['id','projectName','title','priority','added','lastUpdated','action'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMockData()
  }

  updateIssue(element:any){
    const dialogRef = this.dialog.open(EditIssueComponent,{
      data:element
    });
    dialogRef.afterClosed().subscribe(() => {
      this.rows = [];
      this.getMockData();
    });
  }

  deleteIssue(id:number){
    //debugger;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rows = this.rows.filter(item => item.id !== id);
        localStorage.setItem('issues', JSON.stringify(this.rows));
        Swal.fire({
          title: 'Deleted!',
          text: "Your issue has been deleted.",
          icon: 'success',
          confirmButtonColor: '#3085d6',
        })
      }
    })
  }

  getMockData(){
    let issues = JSON.parse(localStorage.getItem('issues') || '{}');
	if(issues.length) {
		var sortedArray: number[] = issues.sort((n1: any,n2: any) => n1.id - n2.id);
		sortedArray.forEach((element: any) => {
		  this.rows.push(element)
		});
	}
    
  }

}
