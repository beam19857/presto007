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


  getMenu(id):Observable<any>{
    return this.http.get(this.baseURL+'/Menu/restaurant/'+id,{headers:this.httpHeader});
  }

  getTypeMenu():Observable<any>{
    return this.http.get(this.baseURL+'/TypeMenu',{headers:this.httpHeader});
  }

  getRawMaterial():Observable<any>{
    return this.http.get(this.baseURL+'/RawMaterial',{headers:this.httpHeader});
  }

  getMainCourseByMarket(id):Observable<any>{

    return this.http.get(this.baseURL+'/MainCourse/byRestaurant/'+id,{headers:this.httpHeader});
  }

 

}


