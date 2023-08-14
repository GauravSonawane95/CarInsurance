import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarinsureRoutingModule } from './carinsure-routing.module';
import { CarinsureComponent } from './carinsure.component';
import { InsurancedetailsComponent } from './insurancedetails/insurancedetails.component';
import { CarbrandsComponent } from './carbrands/carbrands.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelselectComponent } from './modelselect/modelselect.component';
import { VarientselectComponent } from './varientselect/varientselect.component';
import { CoreModule } from '../core/core.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { YearmonthComponent } from './yearmonth/yearmonth.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChooseplanComponent } from './chooseplan/chooseplan.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';


@NgModule({
  declarations: [
    CarinsureComponent,
    InsurancedetailsComponent,
    CarbrandsComponent,
    ModelselectComponent,
    VarientselectComponent,
    YearmonthComponent,
    RegistrationComponent,
    ChooseplanComponent,
    PersonaldetailsComponent,
    
  ],
  imports: [
    CommonModule,
    CarinsureRoutingModule,
    RouterModule,
    FormsModule,
    CoreModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarinsureModule { }
