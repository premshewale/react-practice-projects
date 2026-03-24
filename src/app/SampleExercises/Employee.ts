export class EmployeeDetails {
    empId!:number;
    empName!:string;
    salary!:number;
    company!:string
    dept!:string
    city!:string;
   constructor( empId:number,empName:string,salary:number,company:string,dept:string,city:string)
   {
       this.empId=empId;
       this.empName=empName;
       this.salary=salary;
       this.company=company
       this.dept=dept
       this.city=this.city;
   }
}