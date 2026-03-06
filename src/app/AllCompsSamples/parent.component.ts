import { Component } from '@angular/core';
import { Sports } from './Sports';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  myVarOne:string;
  myVarTwo:string;
  objS:Sports;
  constructor(){
    this.myVarOne="This is first message from parent";
    this.myVarTwo="This is Title received Given by parent";
    this.objS=new Sports("FootBall",75000,"Lionel Messi");
  }
}
