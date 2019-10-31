import { Component,OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';
import { BillServiceService } from './bill.service.service';
import { ModelPagePage } from '../model-page/model-page.page';
import { ModelselectPage } from '../modelselect/modelselect.page';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'





@Component({
  selector: 'app-home',
  templateUrl: 'bill.page.html',
  styleUrls: ['bill.page.scss'],
})


export class BillPage  {
  
  billlist1 = [];
  
  constructor(private db: AngularFireDatabase,private activateRoute:ActivatedRoute,
    private Rout : Router,private BillService : BillServiceService,private modelController : ModalController ) {
    
  }
  ngOnInit(){


    this.BillService.getBill().subscribe(
      data => {
        console.log("get Data");
        console.log(data);
        //this.market = JSON.stringify(data[0].id);
        // data[value of id] . parameter of oject
        for(var i = 0; i < data.length; i++){
          this.billlist1.push(data[i]);
          
          console.log((data[i])); //here you'll get sendernewcall value for all entry
          console.log(this.billlist1);
        }
      }

    );

   

  }
  
  }
   
 


