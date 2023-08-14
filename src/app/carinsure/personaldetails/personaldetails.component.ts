import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ServiceService } from '../carservice/service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit {

  relations: string[] = ["Select Relationship", "Husband", "Wife", "Son", "Dauther", "Brother", "Sister", "Brother in law", "Sister in law"]
  personalDetails!: FormGroup;
  insuranceData: any;

  ownerForm : boolean = true;
  ownerEdit : boolean = false;
  carForm : boolean = false;
  carEdit : boolean = true;
  policyForm : boolean = false;
  policyEdit : boolean = true;

  thirdParyPremium : any;
  ownDamagePremium :any;
  addOnsPremium : any;
  netPremium : any;
  FinalPayment : number = 0;
  gstAmount : number = 0;
  total : number = 0;

  constructor(private carInsure : ServiceService, private fb : FormBuilder ) {
    this.insuranceData = carInsure.carInsuranceModel;
    
  }

  ngOnInit(): void {
    this.createForm();
    this.thirdParyPremium = this.carInsure.carInsuranceModel.selectedPlan.costCoverage.thirdPartyPremium;
   this.ownDamagePremium =  this.carInsure.carInsuranceModel.selectedPlan.costCoverage.ownDamagePremium;
   this.addOnsPremium = this.carInsure.carInsuranceModel.selectedPlan.costCoverage.addOnsPremium;
   this.netPremium = this.carInsure.carInsuranceModel.selectedPlan.costCoverage.netPremium;

    this.total = (Number(this.thirdParyPremium)) + (Number(this.thirdParyPremium)) + (Number(this.thirdParyPremium)) + (Number(this.thirdParyPremium));
    this.gstAmount =this.netPremium * 0.18;
    this.FinalPayment = this.netPremium + this.gstAmount;
    console.log(this.gstAmount,this.FinalPayment);
    this.carInsure.carInsuranceModel.finalPayment = this.FinalPayment;

   }
 
   createForm(){
     this.personalDetails = this.fb.group({
       "owner-details":this.fb.group({
           "fullName":['',[Validators.required]],
           "pincode":['',[Validators.required]],
           "emailAddress":['',[Validators.required]],
           "mobileNumber":['',[Validators.required]],
           "sendUpdatesViaWhatsApp":[false],
           "address":['',[]],
           "nomineeName":['',[Validators.required]],
           "nomineeRelationShip":['']
       }),

       "car-details":this.fb.group({
         "regNumber":[''],
         "chasisNumber":['',[Validators.required]],
         "engineNumber":['',[]],
         "isCarLoanTaken":[false],
         "bankLoanProvider":['']
       }),

  "policy-details":this.fb.group({
         "polyType":[''],
         "insurer":['',],
         "policyNo":['',],
         "policyExp": ['',],
       })
     })
   }

   progress:boolean=true

   save(){
    console.log(this.personalDetails.value);
    this.carInsure.carInsuranceModel.personalData=this.personalDetails.value;
    this.progress=false;
    alert("Personal details collected please proceed for payment.")
   }

   form1(){
   
    this.ownerForm = false;
    this.ownerEdit = true;
    this.carForm = true;
    this.carEdit = false;
   }

   form2(){
    this.carForm = false;
    this.carEdit = true;
    this.policyForm = true;
    this.policyEdit = false;
   }

   edit1(){
this.ownerEdit= false;
this.ownerForm= true;
this.carEdit = true;
this.carForm = false;
this.policyEdit = true;
this.policyForm = false;
   }

   edit2(){
    this.ownerEdit= true;
    this.ownerForm= false;
    this.carEdit = false;
    this.carForm = true;
    this.policyEdit = true;
    this.policyForm = false;
   }

   edit3(){
    this.ownerEdit= true;
    this.ownerForm= false;
    this.carEdit = true;
    this.carForm = false;
    this.policyEdit = false;
    this.policyForm = true;
   }

  
  // save() {
  //   console.log(this.personalDForm.value);
  //   this.insuranceData.personalData = this.personalDForm.value;
  // }

}
