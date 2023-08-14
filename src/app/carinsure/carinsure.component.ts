import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './carservice/service.service';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Component({
  selector: 'app-carinsure',
  templateUrl: './carinsure.component.html',
  styleUrls: ['./carinsure.component.scss']
})
export class CarinsureComponent implements OnInit {
  window:any ;
  totalPremiumReceived!:Observable<Number>;

  get nativeWindow(){
    return _window();
  }

  constructor(public router:Router,private carInsSvc:ServiceService){
 
  }
  ngOnInit(){
   this.totalPremiumReceived = this.carInsSvc.totalPremiumObs$
  }

  options = {
    "key": "rzp_test_3rkCxTytQGLd2Q", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "All Star Insurance", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "/carinsure",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Sonawane", //your customer's name
        "email": "sonawanegs95@gmail.com",
        "contact": "8329593358" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "95,All Star Insurance Office,All Star Complex"
    },
    "theme": {
        "color": "#3399cc"
    }
};

payNow(){
 // this.options.amount = "50000";
  // this.options.order_id = "";

  var rzp1 = new this.nativeWindow.Razorpay(this.options);
  rzp1.open();
}
}
