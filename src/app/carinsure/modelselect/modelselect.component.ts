import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/core/httpservice.service';
import { ServiceService } from '../carservice/service.service';
import { LoaderserviceService } from '../loder/loaderservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-modelselect',
  templateUrl: './modelselect.component.html',
  styleUrls: ['./modelselect.component.scss']
})
export class ModelselectComponent implements OnInit {

  selectedBrand: string | null = null;
  modelList: any[]=[];
  insuranceData: any;
  isLoading$: Observable<boolean>;
//  isLoading$: Observable<boolean>;
//public loder:LoaderserviceService
//this.isLoading$ = this.loder.loading$;
//this.loder.show();
//this.loder.hide();
  ngOnInit(): void {
    this.getData()
  }
  constructor(private Actiroute: ActivatedRoute, private corehttp: HttpserviceService, private carservice: ServiceService,private router:Router ,private loder:LoaderserviceService) {
    this.selectedBrand = this.Actiroute.snapshot.paramMap.get('brandName');
    this.insuranceData = this.carservice.carInsuranceModel;
    this.isLoading$ = this.loder.loading$;
    
  }
  getData() {
    this.loder.show();
    const endPoint = 'brands?'+'brandName='+this.selectedBrand;
    this.corehttp.getDataFromServer(endPoint).subscribe((response: any) => {
      if (response && response.length > 0) {
        this.modelList = response[0].models;
        console.log('list',this.modelList)
        console.log(response);
        this.loder.hide();
      }
    },
      error => {
        this.loder.hide();
      }
    )
  }
  selectModel(model: any) {
    this.insuranceData.modelName=model;
    this.router.navigate(['carinsure/varient',model]);
    console.log(model);
  }
}
