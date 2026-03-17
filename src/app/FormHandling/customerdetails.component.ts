import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent {

  constructor()
  {

  }
  formDetails = new FormGroup({
    name: new FormControl('aa', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.formDetails.controls;
  }
  res:any="";
  submit(){
    //this.res=this.formDetails.get('name').value;
    this.res=this.formDetails.controls['name'].value + "  " + this.formDetails.controls['email'].value;
    this.res+=this.formDetails.controls['body'].value
    console.log(this.res);
  }
}