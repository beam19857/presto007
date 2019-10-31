import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  constructor(private http : HttpClient) { }

  baseURL = "https://damp-garden-65859.herokuapp.com";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})


  getBill():Observable<any>{

    console.log("Watsup!");
    

    return this.http.get(this.baseURL+'/Order',{headers:this.httpHeader});
  }
}
