import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectditem:string='';
  paramsub:any;
  constructor(private activateObj:ActivatedRoute){

  }
  ngOnInit(): void {
    this.paramsub=this.activateObj.params.subscribe(
    (x)=>{this.selectditem = x['itemname'];  })
    
  }
}
