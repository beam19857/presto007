import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(private http : HttpClient) {  }

  baseURL = "http://localhost:9000";
  httpHeader = new HttpHeaders({'Content-Type':'application/json'})


 
  getTypeMenuByMainCourse(id):Observable<any>{
    return this.http.get(this.baseURL + '/TypeMenuByMainCourse/' + id , {headers:this.httpHeader})
  }
  getRawMaterialByTypeMenu(idr,idt):Observable<any>{

    return this.http.get(this.baseURL + '/findRawMatByTypeMenu/' + idr + '/' + idt , {headers:this.httpHeader})
  }

  
  getMainCourseByMarket(id):Observable<any>{

    return this.http.get(this.baseURL+'/MainCourse/byRestaurant/'+id,{headers:this.httpHeader});
  }

 

}


