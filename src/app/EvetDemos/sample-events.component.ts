import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-events',
  templateUrl: './sample-events.component.html',
  styleUrls: ['./sample-events.component.css']
})
export class SampleEventsComponent {
 message!:string;
  constructor()
  {
    this.message="Initial message to be displayed......!!!!!!";
  }
  handleMessage()
  {
    this.message="Welcome to the Workshop on Angular......!!!!";
  }
}
