import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(
    private http : HttpClient,
    private nav : NavController,
    ) { 
 
  }
  body = {
    username:"beam" ,
    password:"1234"

    }

  baseURL = "http://localhost:9000";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})
  

  
  onLogin():Observable<any>{

    console.log("this.body");
    console.log(this.body);
     
    this.nav.navigateForward('/home') ;
    return this.http.post(this.baseURL+'/Service/login',this.body,
    {headers:this.httpHeader , responseType:'text'});

  }

}