import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  totalPremium = new BehaviorSubject<Number>(0);
  totalPremiumObs$ = this.totalPremium.asObservable();



  carInsuranceModel:any = {
    "brandName":"",
    "modelName":"",
    "variantName":"",
    "selectedPlan":{
       "planName":"",
       "planInfo":{},
       "selectedIdv":0, 
       "costCoverage":{
        "netPremium":0,
        "thirdPartyPremium":0,
        "ownDamagePremium":0,
        "addOnsPremium":0,
        "ncbDiscount":0,
       }
    },
    "registerData":{
      
    },
    "personalData":{
 
    }

  }
 
  constructor() { }

  // getCarInsuranceModal() {
  //   return new CarInsurance();
  // }


  sendTotalPremium(amount:number){
    this.totalPremium.next(amount);
  }

}

// export class CarInsurance {
//   brandName!: string;
//   modelName!: string;
//   variantName!: string;
// }
 
// carInsuranceModel:insuranceData={
//   "brandName":'',
//   "modelName":'',
//   "varientName":'',
//   'registerData':{}
 
// }
// constructor(){}
//   // getCarInsurance(){
//   //   return new insuranceData
//   // }

// export class insuranceData{
// brandName!:string;
// modelName!:string;
// varientName!:string;
// registerData!:{}
// }
