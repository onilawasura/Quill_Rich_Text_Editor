import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddContentComponent } from './add-content/add-content.component';
import { ViewContentComponent } from './view-content/view-content.component';

import { QuillModule } from 'ngx-quill'
import { ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContentComponent,
    ViewContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
