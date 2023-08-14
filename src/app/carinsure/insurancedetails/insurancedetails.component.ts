import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurancedetails',
  templateUrl: './insurancedetails.component.html',
  styleUrls: ['./insurancedetails.component.scss']
})
export class InsurancedetailsComponent {
@Input() insuranceData:any;
}
