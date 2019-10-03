import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private http : HttpClient) {  }

  baseURL = "https://damp-garden-65859.herokuapp.com";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})


  getMenu():Observable<any>{
    return this.http.get(this.baseURL+'/Menu',{headers:this.httpHeader});
  }

  getTypeMenu():Observable<any>{
    return this.http.get(this.baseURL+'/TypeMenu',{headers:this.httpHeader});
  }

  getRawMaterial():Observable<any>{
    return this.http.get(this.baseURL+'/RawMaterial',{headers:this.httpHeader});
  }

 getFoodBymarketname(marketname):Observable<any>{
    return this.http.get(this.baseURL+'/food?search='+marketname,{headers:this.httpHeader});
  }

  getOptionByMarketName(marketname):Observable<any>{
    return this.http.get(this.baseURL+'/option?search='+marketname,{headers:this.httpHeader});
  }

  getDrinkByMarketName(marketname):Observable<any>{
    return this.http.get(this.baseURL+'/drink?search='+marketname,{headers:this.httpHeader});
  }

  getSnackByMarketName(marketname):Observable<any>{
    return this.http.get(this.baseURL+'/snack?search='+marketname,{headers:this.httpHeader})
  }

}


