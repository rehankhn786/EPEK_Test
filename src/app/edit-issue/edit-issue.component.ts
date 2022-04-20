import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddIssueComponent } from '../add-issue/add-issue.component';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss']
})
export class EditIssueComponent implements OnInit {
  addIssueForm!: FormGroup;

  priorityList = [
    { name: 'High', value: '1', checked: false },
    { name: 'Medium', value: '2', checked: false },
    { name: 'Low', value: '3', checked: false }
  ];

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, public router: Router,
    @Inject(MAT_DIALOG_DATA) public editIssue : any,
    private dialogref:MatDialogRef<AddIssueComponent>) { }

  ngOnInit(): void {

    let issue = this.editIssue;
    if(issue){
      //debugger;
      this.priorityList.find((x,i) => {
        if(x.name === issue.priority){
          this.priorityList[i].checked = true;
        }
      });

      this.addIssueForm=this.formBuilder.group({
        id: issue.id,
        projectName:[issue.projectName, Validators.required],
        title:[issue.title,Validators.required],
        description:[issue.description,Validators.required],
        priority:[issue.priority,Validators.required],
        added: issue.added,
        lastUpadted: formatDate(new Date(), 'yyyy-MM-dd', 'en')
      })
    }
  }

  updateIssue(id: any){
    //debugger;
    if(this.addIssueForm.valid){
      let array: any[] = [];
      let issues = JSON.parse(localStorage.getItem('issues') || '{}');
      issues = issues.filter((x: any) => x.id !== id); 
      array.push(this.addIssueForm.value);
      array.push(...issues);
      localStorage.setItem('issues', JSON.stringify(array));
      this.dialogref.close();
      this._snackBar.open('Issue has been updated', 'close', {duration: 3000});
      console.log("Issue Updated", this.addIssueForm.value);
    } else {
      this.addIssueForm.controls['projectName'].markAsTouched();
      this.addIssueForm.controls['title'].markAsTouched();
      this.addIssueForm.controls['description'].markAsTouched();
      this.addIssueForm.controls['priority'].markAsTouched();
    }

    
  }

}
