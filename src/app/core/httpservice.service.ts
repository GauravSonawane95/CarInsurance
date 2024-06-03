import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseUrl:string="https://carinsurenceapi.onrender.com/";

  httpHeader:HttpHeaders = new HttpHeaders()
                           .set("Content-type","application/json");

  constructor(private http:HttpClient) { }


  getDataFromServer(endPoint: string) {
    const url = this.baseUrl + endPoint;
    return this.http.get(url, { headers: this.httpHeader });
  }
}
