import { Component, OnInit } from '@angular/core';
import { ProductDetails } from "./product-details";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  flag:boolean=false;
   obj!:ProductDetails;
   objArr:ProductDetails[]=[];
  constructor() { 
    this.obj=new ProductDetails('A11','LED TV',75000,'Sony')
   }

  ngOnInit(): void {
    //for working structral directive 
    this.flag=true
    this.objArr=[
      new ProductDetails('A11','LED TV',75000,'Sony'),
      new ProductDetails('C11','ThinkPad',95000,'Lenovo'),
      new ProductDetails('D11','Home Th',125000,'Sony'),
      new ProductDetails('E11','Fridge',35000,'LG'),
      new ProductDetails('S11','SDD',7500,'HP')
    ]
    this.flag!=this.flag
  }

}