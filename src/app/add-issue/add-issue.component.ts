import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {

  temp:any[]=[];

  addedIssueList:any[]=[];

  //priorityList=["High", "Medium", "Low"];
  priorityList = [
    { name: 'High', value: '1', checked: true },
    { name: 'Medium', value: '2', checked: false },
    { name: 'Low', value: '3', checked: false }
  ];
  addIssueForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, public router: Router,
    @Inject(MAT_DIALOG_DATA) public updatedata : any,
    private dialogref:MatDialogRef<AddIssueComponent>) { }

    actionButton:string="Save"

  ngOnInit(): void {
    this.addIssueForm=this.formBuilder.group({
      id: this.getRandomInt(1, 100),
      projectName:['',Validators.required],
      title:['',Validators.required],
      description:['',Validators.required],
      priority:['High',Validators.required],
      added: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      lastUpadted: formatDate(new Date(), 'yyyy-MM-dd', 'en')
    })


    if(this.updatedata){
      this.actionButton="Update"
      this.addIssueForm.controls['id'].setValue(this.updatedata.id)
      this.addIssueForm.controls['projectName'].setValue(this.updatedata.projectName)
      this.addIssueForm.controls['title'].setValue(this.updatedata.title)
      this.addIssueForm.controls['description'].setValue(this.updatedata.description)
      this.addIssueForm.controls['priority'].setValue(this.updatedata.priority)
      this.addIssueForm.controls['added'].setValue(this.updatedata.added)
      this.addIssueForm.controls['lastUpdated'].setValue(this.updatedata.lastUpdated)
    }
  }
  addIssue(){
    //debugger;
    if(this.addIssueForm.valid){
      var array = [];
      let issues = JSON.parse(localStorage.getItem('issues') || '{}');
      if(!issues.length){
        array.push(this.addIssueForm.value);
        localStorage.setItem('issues', JSON.stringify(array));
      } else {
        array.push(this.addIssueForm.value);
        array.push(...issues);
        localStorage.setItem('issues', JSON.stringify(array));
      }
      this.dialogref.close();
      this._snackBar.open('Issue has been created', 'View Issue', { duration: 5000}).onAction()
      .subscribe(() => this.router.navigateByUrl('/issues'));
      console.log("Product added", this.addIssueForm.value);
    } else {
      this.addIssueForm.controls['projectName'].markAsTouched();
      this.addIssueForm.controls['title'].markAsTouched();
      this.addIssueForm.controls['description'].markAsTouched();
      this.addIssueForm.controls['priority'].markAsTouched();
    }

    
  }

  updateIssue(){

  }
  getRandomInt(min: number, max: number):number{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max - min +1))+min;
  }
  
}


