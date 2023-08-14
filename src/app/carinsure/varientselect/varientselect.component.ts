import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/core/httpservice.service';
import { ServiceService } from '../carservice/service.service';

@Component({
  selector: 'app-varientselect',
  templateUrl: './varientselect.component.html',
  styleUrls: ['./varientselect.component.scss']
})
export class VarientselectComponent implements OnInit{
selectModel:string|null=null;
variantsTypes:string[]=[];
variantList:any[]=[];
selectVarient:any='';
insuranceData:any
  constructor(private Actiserv:ActivatedRoute,private http:HttpserviceService,private carinsure:ServiceService,private router:Router){ 
this.selectModel=this.Actiserv.snapshot.paramMap.get('modelName');
  }
  ngOnInit(): void {
    this.getVarient()  
  }
  getVarient(){
    const endPoint = 'variant?'+'modelName='+this.selectModel;
    this.http.getDataFromServer(endPoint).subscribe((response: any) => {
      if (response && response.length > 0 && response[0].modelList.length > 0 ) {
         const variants : string[]=response[0].modelList.map((el:any)=>el["Fuel Type"])
         this.variantsTypes=[...new Set(variants)];
          this.variantList=response[0].modelList;
          this.selectVarient=this.variantsTypes[0];
          this.insuranceData=this.carinsure.carInsuranceModel;
        console.log(this.variantsTypes)
      }
      
  })
  }

  setVarient(items:string){
    this.selectVarient=items;
  
  }

  NameVarient(obj:any){
    this.insuranceData.varientName=obj['Variant Name']
    this.router.navigate(['carinsure/Regi'])
  }

}
