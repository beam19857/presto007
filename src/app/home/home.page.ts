import { Component,OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';
import { HomeServiceService } from './home-service.service';
import { ModelPagePage } from '../model-page/model-page.page';


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


  constructor(private HomeService : HomeServiceService,private modelController : ModalController ) {}


  
  ngOnInit(){
      this.market1 = {
        id:'',
        location:'',
        name:'',
        timeToClose:'',
        timeToOpen:''
      }
      this.market2 = {
        id:'',
        location:'',
        name:'',
        timeToClose:'',
        timeToOpen:''
      }
      this.market3 = {
        id:'',
        location:'',
        name:'',
        timeToClose:'',
        timeToOpen:''
      }
      this.HomeService.getAccout().subscribe(
        data => {
          console.log("get Data");
          console.log(data);
          //this.market = JSON.stringify(data[0].id);
          // data[value of id] . parameter of oject
          for(var i = 0; i < data.length; i++){
            this.marketlist1.push(data[i]);
            
            console.log((data[i])); //here you'll get sendernewcall value for all entry
            console.log(this.marketlist1);
          }
        }
        
      );
  }
 async openModel1(){
   const model = await this.modelController.create({
      component : ModelPagePage , 
      componentProps : {
      markets : this.market1
      }
   });
   
   return await model.present();
  }

  async openModel2(){
    const model = await this.modelController.create({
       component : ModelPagePage,
       componentProps : {
        markets : this.market2
        }
    });
    
    return await model.present();
   }

   async openModel3(){
    const model = await this.modelController.create({
       component : ModelPagePage,
       componentProps : {
        markets : this.market3
        }
    });
    
    return await model.present();
   }

   checkValue(){
      console.log(this.market1);
      console.log(this.market2);
      console.log(this.market3);

   }


}
