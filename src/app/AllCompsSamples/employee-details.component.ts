import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from './Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  flag:boolean=false;
  flag1:boolean=false;
  flag2:boolean=false
  obj!:EmployeeDetails;
  objArr:EmployeeDetails[]=[];
  selectedEmployee: any = null;
 constructor() {  }

 ngOnInit(): void {
   //for working structral directive 
   this.flag=true
   this.objArr=[
     new EmployeeDetails(101,'ABC AAA',75000,'Wipro','Support','Mumbai'),
     new EmployeeDetails(102,'XYZ BBB',95000,'Google','Support','Pune'),
     new EmployeeDetails(103,'PQR CCC',125000,'RedHat','Manager','Pune'),
     new EmployeeDetails(104,'LMN DDD',35000,'TCS','Developer','Mumbai'),
     new EmployeeDetails(105,'AAA EEE',75000,'Microsoft','Developer','Mumbai')
   ]
   this.flag!=this.flag
 }

 Employees: EmployeeDetails[] = this.objArr;
 
 Department(event: any): void {
  this.flag1=true
  const selectedDept = event.target.value;
  if (selectedDept == 'all') {
   this.Employees = this.objArr;
  } else {
    this.Employees = this.objArr.filter(employee => employee.dept == selectedDept);
   }
}

  getDepartments(): string[] {
    return this.objArr.map(employee => employee.dept);
  }

  showEmployeeDetails(employee: any): void {
    this.flag2=true;
    this.selectedEmployee = employee;
  }
}
