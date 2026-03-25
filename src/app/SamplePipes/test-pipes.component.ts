import { Component } from '@angular/core';
import { Book } from './Book';
@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})
export class TestPipesComponent {
  bookObj=new Book('Micrsoft Azure',1234,'Scott');
  xyz:string="constoso public ltd";
  jd = new Date(2002,3, 15);


}
