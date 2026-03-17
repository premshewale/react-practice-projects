import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  constructor()
  {

  }
  result!: any;
    log(a:any) {
        this.result = a.value;
        console.log(a.value);
       // console.log(this.website.name + "--" + this.website.description)
    }
}
