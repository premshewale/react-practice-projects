import { Component } from '@angular/core';
import { EmployeeDetails } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  
  objArr:EmployeeDetails[]=[];
  dept!:string;
  constructor()
  {
    this.objArr=[
      new EmployeeDetails(101,'ABC AAA',75000,'Wipro','Support','Mumbai'),
      new EmployeeDetails(102,'XYZ BBB',95000,'Google','Support','Pune'),
      new EmployeeDetails(103,'PQR CCC',125000,'RedHat','Manager','Pune'),
      new EmployeeDetails(104,'LMN DDD',35000,'TCS','Developer','Mumbai'),
      new EmployeeDetails(105,'AAA EEE',75000,'Microsoft','Developer','Mumbai')
    ]
  }

  departments=["Support","Manager","Developer","HR"];
  newresult="";
  show:boolean=false;
resultantArr!:EmployeeDetails[];
  displayDepartment(department:string){
    this.resultantArr=[];
    this.show=true;
    this.newresult="you choose -------" +department;
    this.dept=department;
    
    this.objArr.filter((emp)=>{
      if(emp.dept==department)
    {
      this.resultantArr.push(emp)
    
    }
    console.log(this.resultantArr)
  })
  }

  
}
