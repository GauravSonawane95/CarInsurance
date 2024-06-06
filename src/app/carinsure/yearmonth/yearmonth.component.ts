import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-yearmonth',
  templateUrl: './yearmonth.component.html',
  styleUrls: ['./yearmonth.component.scss']
})
export class YearmonthComponent {
  
  @Input() isLoading : boolean = false;
  }

