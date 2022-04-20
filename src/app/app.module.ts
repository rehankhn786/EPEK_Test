import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddIssueComponent } from './add-issue/add-issue.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatExpansionModule} from '@angular/material/expansion';
// import { MatSortModule } from '@angular/material/sort';
// import {MatAccordion} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddIssueComponent,
    IssueDetailsComponent,
    EditIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    // MatPaginatorModule,
    // MatExpansionModule,
    // MatAccordion,
    MatButtonModule,
    MatSnackBarModule
    // MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
