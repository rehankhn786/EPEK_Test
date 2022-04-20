import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AddIssueComponent } from '../add-issue/add-issue.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // todaysDate : Date | undefined;

  constructor(public router: Router, private dialog :MatDialog) { }

  ngOnInit(): void {
    // this.todaysDate = new Date();
  }

  addIssueDialog() {
    this.dialog.open(AddIssueComponent)
  }
  selectPage(type:string){
    this.router.navigate([type])
  }

}
