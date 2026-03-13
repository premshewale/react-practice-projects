import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-two-events',
  templateUrl: './demo-two-events.component.html',
  styleUrls: ['./demo-two-events.component.css']
})
export class DemoTwoEventsComponent {
 firstName!:string;
 lastName!:string;
 result:string="";
  constructor()
  {
    this.firstName="aaa";
    this.lastName="bbbb"
  }
  displayDetails(fName:string,Lname:string)
  {
    let str=fName + "  " + Lname + "  ";
    this.result= str + "Yor registraion for Angular is successful"
  }
  Courses=["Azure PaaS","Azure IaaS","Data Analytics","Machine Learning"];
  newresult="";
  show:boolean=false;
  dispalyCourse(course:string)
  {      this.show=true;
       this.newresult= "You choose ----" + course;
  }
}
