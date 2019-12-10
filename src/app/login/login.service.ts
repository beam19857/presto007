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
    

  baseURL = "http://localhost:9000";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})
  

  
  onLogininput(users):Observable<any>{
    console.log("Login");
    
// this.nav.navigateForward('/home') ;
    return this.http.post(this.baseURL+'/Service/login',users,{headers:this.httpHeader , responseType:'text'}); 

    
  }

}