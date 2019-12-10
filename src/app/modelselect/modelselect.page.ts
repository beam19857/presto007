import { Component, OnInit } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular';
import { ModelPagePage } from '../model-page/model-page.page';
import {ModeldrinkPage} from '../modeldrink/modeldrink.page';
import {ModelsnackPage} from '../modelsnack/modelsnack.page';
import {ModelfruitPage} from "../modelfruit/modelfruit.page";
import { ModelbuffonePage } from '../modelbuffone/modelbuffone.page';
import { ModelbufftwoPage } from '../modelbufftwo/modelbufftwo.page';
import { ModelgrillPage } from '../modelgrill/modelgrill.page';


@Component({
  selector: 'app-modelselect',
  templateUrl: './modelselect.page.html',
  styleUrls: ['./modelselect.page.scss'],
})
export class ModelselectPage implements OnInit {

  //ดึง api มาเช็คว่าแต่ละร้านมี เมนูดังกล่าวไหม ถ้าไม่มีให้ขึ้นว่าไม่มี ถ้ามีให้เด้งไปหน้าเพิ่มอาหารทันที

  constructor(private navPara:NavParams,private modelController : ModalController) { }

  marketname ;
  userID ;
  marketKey ;
  basketKey ;

  ngOnInit() {
    this.marketname = this.navPara.get('markets');
    this.userID = this.navPara.get('userID');
    this.marketKey = this.navPara.get('marketKey');
    this.basketKey = this.navPara.get('basketKey')
    this.marketname = this.navPara.get('markets');
  }

  openFoodPage(){  
    this.openModel1()
    this.modelController.dismiss();
  }
  openDrinkPage(){
    this.openModel2()
    this.modelController.dismiss();

  }
  openSnackPage(){  
    this.openModel3()
    this.modelController.dismiss();

  }
  openBekeryPage(){
    this.openModel1()
    this.modelController.dismiss();

  }

  openFruitPage(){
    this.openModel4()
    this.modelController.dismiss();

  }
  openBuffeOne(){
    this.openModel5()
    this.modelController.dismiss();

  }
  openBuffeTwo(){
    this.openModel6()
    this.modelController.dismiss();
  }
  openGrill(){
    this.openModel7()
    this.modelController.dismiss();
  }
  closePage(){
    this.modelController.dismiss();
  }

  async openModel1(){
    const model = await this.modelController.create({
       component : ModelPagePage , 
       componentProps : {
        markets : this.marketname,
        userID :  this.userID,      
       }
    });
    return await model.present();
}

async openModel2(){
  const model = await this.modelController.create({
     component : ModeldrinkPage , 
     componentProps : {
      markets : this.marketname,
      userID :  this.userID,      
     }
  });
  return await model.present();
}

async openModel3(){
  const model = await this.modelController.create({
     component : ModelsnackPage , 
     componentProps : {
      markets : this.marketname,
      userID :  this.userID,      
     }
  });
  return await model.present();
}

async openModel4(){
  const model = await this.modelController.create({
     component : ModelfruitPage , 
     componentProps : {
      markets : this.marketname,
      userID :  this.userID,      
     }
  });
  return await model.present();
}

async openModel5(){
  const model = await this.modelController.create({
     component : ModelbuffonePage , 
     componentProps : {
      markets : this.marketname,
      userID :  this.userID,      
     }
  });
  return await model.present();
}

async openModel6(){
  const model = await this.modelController.create({
     component : ModelbufftwoPage , 
     componentProps : {
      markets : this.marketname,
      userID :  this.userID,      
     }
  });
  return await model.present();
}

async openModel7(){
  const model = await this.modelController.create({
     component : ModelgrillPage , 
     componentProps : {
      markets : this.marketname,
      userID :  this.userID,      
     }
  });
  return await model.present();
}





}
