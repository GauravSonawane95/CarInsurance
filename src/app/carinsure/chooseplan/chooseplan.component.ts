import { Component } from '@angular/core';
import { ServiceService } from '../carservice/service.service';
import { HttpserviceService } from 'src/app/core/httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chooseplan',
  templateUrl: './chooseplan.component.html',
  styleUrls: ['./chooseplan.component.scss']
})
export class ChooseplanComponent {
  insuranceData:any;
  planInfo:any;
  selectedPlan:string="";
  selectedPlanInfo:any;
  addOnCoverageList:any=[];
  constructor(private http:HttpserviceService,private router:Router,private carInsSvc:ServiceService){
    this.insuranceData = this.carInsSvc.carInsuranceModel ;
  }
 
  ngOnInit(): void {
    this.getEligiblePlan()
  }

  getEligiblePlan(){
    this.http.getDataFromServer("get-eligible-plan").subscribe((response:any)=>{
      if(response instanceof Object){
       this.planInfo = response
       this.selectedPlan = response.plans[0].planName;
       this.setPlan(this.selectedPlan);
      }
      console.log('planInfo',this.planInfo);
    })
  }


  setPlan(plan:string){
    this.selectedPlan = plan ;
    this.insuranceData.selectedPlan.planName = plan ;
    //get selecdtedplan info
   this.selectedPlanInfo = this.planInfo.plans.filter((el:any)=> el.planName == plan)[0];
     if(this.selectedPlanInfo && this.selectedPlanInfo.contract != null && this.selectedPlanInfo.contract.coverages.length > 0){
      let addOnList = this.selectedPlanInfo.contract.coverages.filter((obj:any)=> obj.coverType === 'ADDONS');
      this.addOnCoverageList = JSON.parse(JSON.stringify(addOnList));
       console.log("addOn" ,this.addOnCoverageList);
     }
    
     this.setCostDetails(this.selectedPlanInfo);
  }

  setCostDetails(planObj:any){
   // setting to default value 
  this.insuranceData.selectedPlan.costCoverage.netPremium = 0 ;
  this.insuranceData.selectedPlan.costCoverage.ownDamagePremium = 0 ;
  this.insuranceData.selectedPlan.costCoverage.ncbDiscount = 0 ;
  this.insuranceData.selectedPlan.costCoverage.thirdPartyPremium = 0 ;
  this.insuranceData.selectedPlan.costCoverage.addOnsPremium = 0 ;
  //extracting own damage coverage
   let ownCoverage = planObj.contract.coverages.filter((el:any)=> (el.coverType === "OWN_DAMAGE"))[0];
    if(ownCoverage){
      this.insuranceData.selectedPlan.costCoverage.ownDamagePremium = ownCoverage.netPremium;
      this.insuranceData.selectedPlan.costCoverage.netPremium += Number(ownCoverage.netPremium);
    }

    //extracting thirdparty coverage
    let thirdPartyCoverage = planObj.contract.coverages.filter((el:any)=> (el.coverType === "THIRD_PARTY"))[0];
     if(thirdPartyCoverage){
      this.insuranceData.selectedPlan.costCoverage.thirdPartyPremium = thirdPartyCoverage.netPremium;
      this.insuranceData.selectedPlan.costCoverage.netPremium += Number(thirdPartyCoverage.netPremium);
    }  
     
    //calculating total discounts
    if(planObj.discounts.otherDiscounts && planObj.discounts.otherDiscounts.length > 0){
      var totalDiscount = 0 ;
     totalDiscount = planObj.discounts.otherDiscounts.reduce((acc:any,a2:any)=> (acc + Number(a2.discountAmount)),0);
     if(totalDiscount){
      this.insuranceData.selectedPlan.costCoverage.ncbDiscount = totalDiscount;
      this.insuranceData.selectedPlan.costCoverage.netPremium -= totalDiscount;
     } 
    }

    this.carInsSvc.sendTotalPremium(this.insuranceData.selectedPlan.costCoverage.netPremium);
  }

  caculateAddOnCoverage(flag:boolean,index:number){
    const  netPremium =  this.addOnCoverageList[0]?.subCovers[index].netPremium
    if(flag){
      this.insuranceData.selectedPlan.costCoverage.addOnsPremium += Number(netPremium);
      this.insuranceData.selectedPlan.costCoverage.netPremium += Number(netPremium);;

    }else {
      this.insuranceData.selectedPlan.costCoverage.addOnsPremium -= Number(netPremium);
      this.insuranceData.selectedPlan.costCoverage.netPremium -= Number(netPremium);;
    }
    this.carInsSvc.sendTotalPremium(this.insuranceData.selectedPlan.costCoverage.netPremium);
  }
}






  // continue(){
  //   this.router.navigate(['/carinsure/personal']);
  // }



//   insuranceData:any;
//   planInfo:any;
//   selectedPlan:string="";
//   addOnCoverageList:any=[];
//   constructor(private http:HttpserviceService,private router:Router,private carService:ServiceService){
//     this.insuranceData = this.carService.carInsuranceModel ;
//   }
 
//   ngOnInit(): void {
//     this.getEligiblePlan()
//   }

//   getEligiblePlan(){
//     this.http.getDataFromServer("get-eligible-plan").subscribe((response:any)=>{
//       if(response instanceof Object){
//        this.planInfo = response
//        this.selectedPlan = response.plans[0].planName;
//        this.setPlan(this.selectedPlan);
//       }
//       console.log('planInfo',this.planInfo);
//     })
//   }


//   setPlan(plan:string){
//     this.selectedPlan = plan ;

//     //get selecdtedplan info
//     let selectedPlanInfo = this.planInfo.plans.filter((el:any)=> el.planName == plan)[0];
//      if(selectedPlanInfo && selectedPlanInfo.contract != null && selectedPlanInfo.contract.coverages.length > 0){
//        this.addOnCoverageList = selectedPlanInfo.contract.coverages.filter((obj:any)=> obj.coverType === 'ADDONS');
//        console.log("addOn" ,this.addOnCoverageList);
//        console.log("Previous Data ",this.carService.carInsuranceModel.registerData)
//      }
//   }

// }
