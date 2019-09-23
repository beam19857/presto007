import { Component, OnInit } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular';
import { ModelPagePage } from '../model-page/model-page.page';


@Component({
  selector: 'app-modelselect',
  templateUrl: './modelselect.page.html',
  styleUrls: ['./modelselect.page.scss'],
})
export class ModelselectPage implements OnInit {

  //ดึง api มาเช็คว่าแต่ละร้านมี เมนูดังกล่าวไหม ถ้าไม่มีให้ขึ้นว่าไม่มี ถ้ามีให้เด้งไปหน้าเพิ่มอาหารทันที

  constructor(private navPara:NavParams,private modelController : ModalController) { }

  marketname ;

  ngOnInit() {
    this.marketname = this.navPara.get('markets');
  }

  openFoodPage(){  
    this.openModel1()
    this.modelController.dismiss();
  }
  openDrinkPage(){
    this.openModel1()
    this.modelController.dismiss();

  }
  openSnackPage(){  
    this.openModel1()
    this.modelController.dismiss();

  }
  openBekeryPage(){
    this.openModel1()
    this.modelController.dismiss();

  }

  openFruitPage(){
    this.openModel1()
    this.modelController.dismiss();

  }
  closePage(){
    this.modelController.dismiss();
  }

  async openModel1(){
    const model = await this.modelController.create({
       component : ModelPagePage , 
       componentProps : {
       markets : this.marketname
       }
    });
    return await model.present();
}
}
