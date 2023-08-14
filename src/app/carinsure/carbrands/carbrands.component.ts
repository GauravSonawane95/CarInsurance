import { Component } from '@angular/core';
import {  ServiceService } from '../carservice/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carbrands',
  templateUrl: './carbrands.component.html',
  styleUrls: ['./carbrands.component.scss']
})
export class CarbrandsComponent {
carList:any=[
  {
      logoPath:"https://www.pngmart.com/files/22/Tata-Motors-Logo-PNG-Image.png",
      brandName:"TATA",
  },
  {
    logoPath:"https://logos-world.net/wp-content/uploads/2021/03/Kia-Symbol.png",
    brandName:"KIA",
},
{
  logoPath:"https://tse3.mm.bing.net/th?id=OIP.KIvO4PqN-LimSL7Y3zKD9gAAAA&pid=Api&P=0&h=180",
  brandName:"Maruti",
},

{
  logoPath:"https://seeklogo.com/images/A/Audi-logo-C1D51B9B5E-seeklogo.com.png",
  brandName:"AUDI",
},

]

insuranceData!:any;
constructor(private carservice:ServiceService,private route:Router){
  this.insuranceData=this.carservice.carInsuranceModel
}
selectBrand(name:string){
this.insuranceData.brandName=name;
this.route.navigate(['/carinsure/model',name])
}
}
