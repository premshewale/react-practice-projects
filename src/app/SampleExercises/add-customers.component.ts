import { Component } from '@angular/core';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent {
  newCustomer: any = {};
  customers: any[] = [];

  addCustomer(): void {
    this.customers.push(this.newCustomer);
    this.newCustomer = {}; // for Clear the input fields
  }
}
