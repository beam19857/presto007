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
  market;
  marketlist = [];

  constructor(private HomeService : HomeServiceService,private modelController : ModalController ) {}


  
  ngOnInit(){
      this.HomeService.getAccout().subscribe(
        data => {
          console.log("get Data");
          console.log(data);
          //this.market = JSON.stringify(data[0].id);
          // data[value of id] . parameter of oject
          for(var i = 0; i < data.length; i++){
            this.marketlist.push(data[i]);
            console.log((data[i])); //here you'll get sendernewcall value for all entry
            console.log(this.marketlist);
          }
        }
        
      );
  }
 async openModel1(){
   const model = await this.modelController.create({
      component : ModelPagePage
   });
   
   return await model.present();
  }

  async openModel2(){
    const model = await this.modelController.create({
       component : ModelPagePage
    });
    
    return await model.present();
   }

   async openModel3(){
    const model = await this.modelController.create({
       component : ModelPagePage
    });
    
    return await model.present();
   }

 


}
