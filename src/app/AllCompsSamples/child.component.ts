import { Component,Input } from '@angular/core';
import { Sports } from './Sports';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() messageOne!:string;
@Input() title!:string;
@Input() objSports!:Sports;

}
