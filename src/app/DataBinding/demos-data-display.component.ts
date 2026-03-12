import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './demos-data-display.component.html',
  styleUrls: ['./demos-data-display.component.css']
})
export class DemosDataDisplayComponent {

  flag = true;
  mCompany:string="Contoso Public Ltd";
//	imgCity:string="city.jpg";
  //anonymous object deifned in TS syntax 
  tech="Angular framework";
website = {
     name : 'SP TechnoSolutions',
     url : 'http://angular.io',
     logo : 'favicon.ico',
     description: 'This is description of the site; This is description of the site'
};
}
