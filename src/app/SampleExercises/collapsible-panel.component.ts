import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.css']
})
export class CollapsiblePanelComponent {
  panel1 = false;
  panel2 = false;
  panel3 = false;

  togglePanel(panelNumber: number): void {
    if (panelNumber == 1) {
      this.panel1 = !this.panel1;
      this.panel2 = false;
      this.panel3 = false;
    } else if (panelNumber == 2) {
      this.panel1 = false;
      this.panel2 = !this.panel2;
      this.panel3 = false;
    } else if (panelNumber == 3) {
      this.panel1 = false;
      this.panel2 = false;
      this.panel3 = !this.panel3;
    }
  }
}
