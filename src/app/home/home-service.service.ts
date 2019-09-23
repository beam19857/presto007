import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http : HttpClient) { }

  baseURL = "http://localhost:8000";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})


  getAccout():Observable<any>{
    return this.http.get(this.baseURL+'/marketlist',{headers:this.httpHeader});
  }
}
