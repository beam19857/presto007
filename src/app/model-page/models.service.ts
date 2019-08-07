import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private http : HttpClient) {  }

  baseURL = "http://localhost:8000";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})


  getFoodBymarketname(marketname):Observable<any>{
    return this.http.get(this.baseURL+'/food?search='+marketname,{headers:this.httpHeader});
  }

  getOptionByMarketName(marketname):Observable<any>{
    return this.http.get(this.baseURL+'/option?search='+marketname,{headers:this.httpHeader});
  }

}


