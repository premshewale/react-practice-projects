import { Component } from '@angular/core';

@Component({
  selector: 'app-arithmetic-oprations',
  templateUrl: './arithmetic-oprations.component.html',
  styleUrls: ['./arithmetic-oprations.component.css']
})
export class ArithmeticOprationsComponent {
  num1:number=0;
  num2:number=0;
  result:number=0;
  flag:boolean=false;
  constructor(){
  }
    Addition(){
      this.flag=true;
      this.result=this.num1+this.num2;
   
    }
    Substraction(){
      this.flag=true;
      this.result=this.num1-this.num2;
      
    }
    Mutiplication(){
      this.flag=true;
      this.result=this.num1*this.num2;
      
    }
    Divison(){
      this.flag=true;
      this.result=this.num1/this.num2;
    
    }


  }




