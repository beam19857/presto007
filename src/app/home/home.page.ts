import { Component,OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';
import { HomeServiceService } from './home-service.service';
import { ModelPagePage } from '../model-page/model-page.page';
import { ModelselectPage } from '../modelselect/modelselect.page';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import {globalVariable} from "../globalVariable"
import {Events} from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage  {
  
  market1;
  market2;
  market3;
  marketlist1 = [];
    baskets0 : AngularFireList<any> = null;
    baskets1 : Observable<any[]>;
    newBaskets = {UID : ''}
    key01; //buskets key
    key02; // markets key
  checkBasket = false  ;
  marketCheck1 = false ;
  marketCheck2 = false ;
  marketCheck3 = false ;
  marketKey01;
  marketKey02;
  marketKey03;
  //===============checkOrderlist=================
  orderOnm1 ;

  //================================


  constructor(private db: AngularFireDatabase,
    private activateRoute:ActivatedRoute,
    private Rout : Router,
    private HomeService : HomeServiceService,
    private modelController : ModalController ,
    public events : Events ,
    public globalVar : globalVariable) {
    this.baskets0 = db.list('/baskets'); //ดึงมาแสดง
      this.baskets1 = this.baskets0.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
      events.subscribe('updateOrderList', () => {
        this.updateOrderList();
      });
        
        //console.log(this.orderOnm1 )


  }
    
  dataUID ;
   

  

  
  ngOnInit(){
    

    this.dataUID = this.activateRoute.snapshot.paramMap.get('myids');
      console.log(this.dataUID);
      this.newBaskets.UID = this.dataUID;

      

      
      this.HomeService.getAccout().subscribe(
        data => {
          console.log("get Data");
          console.log(data);
          //this.market = JSON.stringify(data[0].id);
          // data[value of id] . parameter of oject
          for(var i = 0; i < data.length; i++){
            this.marketlist1.push(data[i]);
            
            console.log((data[i].id)); //here you'll get sendernewcall value for all entry
            console.log(this.marketlist1);
          }
        }
        
      );
      //console.log(this.market1);
  }

  
 async openModel1(){
   if(this.checkBasket == false){
   this.key01 =  this.addBasket(this.newBaskets);
   this.checkBasket = true;
   }
   if(this.marketCheck1 == false){
      this.marketKey01 = this.addMarket(this.key01,this.market1)
      console.log(this.marketKey01)
      this.marketCheck1 = true;
   }
   console.log(this.key01);
    
   const model = await this.modelController.create({
      component : ModelselectPage , 
      componentProps : {
      markets : this.market1,
      userID :  this.dataUID,
      marketKey : this.marketKey01,
      basketKey : this.key01
      }
   });
  
   console.log(this.market1);
   
   return await model.present();
  }

  async openModel2(){
    if(this.checkBasket == false){
      this.key01 =  this.addBasket(this.newBaskets);
      this.checkBasket = true;
      }
      if(this.marketCheck2 == false){
         this.marketKey02 = this.addMarket(this.key01,this.market2)
         console.log(this.marketKey02)
         this.marketCheck2 = true;
      }
    const model = await this.modelController.create({
       component : ModelPagePage,
       componentProps : {
        markets : this.market2,
        userID :  this.dataUID,
        marketKey : this.marketKey02,
        basketKey : this.key01
        }
    });
    
    return await model.present();
   }

   async openModel3(){
    if(this.checkBasket == false){
      this.key01 =  this.addBasket(this.newBaskets);
      this.checkBasket = true;
      }
      if(this.marketCheck3 == false){
         this.marketKey02 = this.addMarket(this.key01,this.market3)
         console.log(this.marketKey02)
         this.marketCheck3 = true;
      }
    const model = await this.modelController.create({
       component : ModelPagePage,
       componentProps : {
        markets : this.market3,
        userID :  this.dataUID,
        marketKey : this.marketKey03,
        basketKey : this.key01
        }
    });
    
    return await model.present();
   }

   checkValue(){
      console.log(this.market1);
      console.log(this.market2);
      console.log(this.market3);

   }

   addBasket(basket) {
    let key = this.baskets0.push(basket).key
    return key
  }
  addMarket(key,marketname){
    return firebase.database().ref('baskets/'+key+'/market').push(marketname).key
  }

  checkOrder(){ 
      console.log(this.orderOnm1)
  }
  updateOrderList(){
    console.log("update orderlist")
    this.orderOnm1 = this.globalVar.Order.market1.orlderlist;
  }


}
