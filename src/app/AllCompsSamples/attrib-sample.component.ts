import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attrib-sample',
  templateUrl: './attrib-sample.component.html',
  styleUrls: ['./attrib-sample.component.css']
})
export class AttribSampleComponent  {
  svar:string="style using ngStyle";
  color1!:string;
  size1!:number;
  displayText!:string;
  visible!:boolean;
  constructor() 
  {
  this.color1 = 'violet';
  this.size1 = 16;
  this.displayText = 'show-class';
  this.visible = true;
   }
}