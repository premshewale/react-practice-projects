import { Component } from '@angular/core';

import { Sports } from './Sports';
@Component({
  selector: 'app-sports-details',
  templateUrl: './sports-details.component.html',
  styleUrls: ['./sports-details.component.css']
})
export class SportsDetailsComponent {
message:string="State level September 2023 Sport Events ";

sportName:string;
venue:string;
objSports:Sports;
  constructor(){
    this.sportName="Cricket Matches";
    this.venue="Balewadi Stadium ,Pune";
    this.objSports=new Sports("FootBall",75000,"Lionel Messi");
  }
}
