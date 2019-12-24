import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import Quill from 'quill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  editorForm: FormGroup;
  editorContent: string;

  editorStyle = {
    height: '300px',
    backgroundColor: '#ffffff'
  }

  config = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['code-block'],
      ['link', 'image', 'video'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
    ]
  }

  configViewer = {
    toolbar: false,
  }

  constructor() { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    });
  }


  onSubmit(){
    this.editorContent = this.editorForm.get('editor').value;
    //console.log(this.editorForm.get('editor').value);
  }

  maxLength(e){

    //console.log(e.editor.getLength());
    if(e.editor.getLength() > 10){
      e.editor.deleteText(1000, e.editor.getLength());
    }
  }

}
