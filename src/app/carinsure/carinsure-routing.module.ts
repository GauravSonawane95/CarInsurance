import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarinsureComponent } from './carinsure.component';
import { CarbrandsComponent } from './carbrands/carbrands.component';
import { ModelselectComponent } from './modelselect/modelselect.component';
import { VarientselectComponent } from './varientselect/varientselect.component';
import { ChooseplanComponent } from './chooseplan/chooseplan.component';
import { RegistrationComponent } from './registration/registration.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';

const routes: Routes =[
  { path: '', component: CarinsureComponent, 
children : [
  {path:'model/:brandName',component:ModelselectComponent},
  {path:'varient/:modelName',component:VarientselectComponent},
  {path:'plan',component:ChooseplanComponent},
 
  {path:'Regi',component:RegistrationComponent},
  {path:'personal',component:PersonaldetailsComponent},
  {path : '', component : CarbrandsComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarinsureRoutingModule { }
