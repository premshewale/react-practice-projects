import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-two-events',
  templateUrl: './demo-two-events.component.html',
  styleUrls: ['./demo-two-events.component.css']
})
export class DemoTwoEventsComponent {
   firstName:string;
   lastName:string; 
   result!:string;
  constructor(){
    this.firstName="AAA";
    this.lastName="BBB";
   }
   displayDetails(fName:string,LName:string){
    let str=fName +" "+LName+" ";
    this.result= str+ " Your Registration for Angular is Successful.."
   }
   Courses=["Azure PasS","Azure IasS","Data Analytics","Machine Learning"];
   newresult="";
   show:boolean=false;
   displayCourse(course:string){
    this.show=true;
    this.newresult = "You Choose ---- "+course;
   }
}
