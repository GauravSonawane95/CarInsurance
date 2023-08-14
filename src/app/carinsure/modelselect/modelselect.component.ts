import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/core/httpservice.service';
import { ServiceService } from '../carservice/service.service';

@Component({
  selector: 'app-modelselect',
  templateUrl: './modelselect.component.html',
  styleUrls: ['./modelselect.component.scss']
})
export class ModelselectComponent implements OnInit {

  selectedBrand: string | null = null;
  modelList: any[]=[];
  insuranceData: any;

  ngOnInit(): void {
    this.getData()
  }
  constructor(private Actiroute: ActivatedRoute, private corehttp: HttpserviceService, private carservice: ServiceService,private router:Router) {
    this.selectedBrand = this.Actiroute.snapshot.paramMap.get('brandName');
    this.insuranceData = this.carservice.carInsuranceModel;
    
  }
  getData() {
    const endPoint = 'brands?'+'brandName='+this.selectedBrand;
    this.corehttp.getDataFromServer(endPoint).subscribe((response: any) => {
      if (response && response.length > 0) {
        this.modelList = response[0].models;
        console.log('list',this.modelList)
        console.log(response);
      }
    },
      error => {

      }
    )
  }
  selectModel(model: any) {
    this.insuranceData.modelName=model;
    this.router.navigate(['carinsure/varient',model]);
    console.log(model);
  }
}
