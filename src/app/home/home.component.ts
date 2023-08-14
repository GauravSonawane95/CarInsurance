import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'CarInsurance';
  CarClick:boolean=true;
BikeClick:boolean=false;
AutoClick:boolean=false;
  carClick(){
    this.CarClick=true;
    this.BikeClick=false;
    this.AutoClick=false
  }
  bikeClick(){
    this.CarClick=false;
    this.BikeClick=true;
    this.AutoClick=false
  }
  autoClick(){
    this.CarClick=false;
    this.BikeClick=false;
    this.AutoClick=true;
  }
}
