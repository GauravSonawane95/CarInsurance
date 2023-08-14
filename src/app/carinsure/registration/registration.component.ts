import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../carservice/service.service';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  insuranceData:any;
  Years:string[]=['2023','2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012','2011','2010','Select Year']
  Month:string[]=['January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'Select Month'
]
  City:string[]=['Mumbai','Pune','Bangloare','Jalgoan','Nashik','Select City']

  regiForm!:FormGroup

  ngOnInit(): void {
    this.insuranceData=this.carinsure.carInsuranceModel;
    this.createRegistrationForm()
  }
  constructor(private carinsure:ServiceService,private route:Router){

  }
  createRegistrationForm(){
    this.regiForm = new FormGroup({
      "year":new FormControl('',[Validators.required,]),
      "month":new FormControl('',[Validators.required,]),
      "city":new FormControl('',[Validators.required,]),
      "ownexp":new FormControl('',[Validators.required,]),
      "thirdpartyexp":new FormControl('',[Validators.required,])  })
    }

  save(){
 console.log(this.regiForm.value);
 this.carinsure.carInsuranceModel.registerData = this.regiForm.value;
this.route.navigate(['/carinsure/plan'])
  }
}
// export class Regi{
//   year!:string;
//   month!:string;
//   citi!:string;
//   ownexp!:any;
//   thirdpartyexp!:any;
// }
