import { Component, OnInit, ViewChild } from '@angular/core';
import {NavParams,ModalController, PickerController} from '@ionic/angular';
import {SelectSearchableModule, SelectSearchableComponent} from 'ionic-select-searchable'
import { IonicSelectableComponent } from 'ionic-selectable';
import { ModelsService } from './models.service';



 
 
@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.page.html',
  styleUrls: ['./model-page.page.scss'],
})
export class ModelPagePage implements OnInit {
  
  marketname ;
  foodlist = [];
  food ;
  numfood : Number ;
  foodname  ;

  
  constructor(private modelService : ModelsService,private navPara:NavParams,private modelController : ModalController,private pickerCtrl: PickerController) {
    
   }

  ngOnInit() {
    this.foodname = {
      name : '',
  }
    this.food = {id:'',name:'',exFood:'',priceBase:'',markets:''}
    this.marketname = this.navPara.get('markets');
    this.modelService.getFoodBymarketname(this.marketname).subscribe(
      data => {
        console.log("get Data");
        console.log(data);
        for(var i = 0; i < data.length; i++){ 
          if(data[i].exFood == 'extra'){
              data[i].name += " พิเศษ"
          }
          this.foodlist.push(data[i]);


        }
        
      }
      
    );
  }

  closePage(){
    this.modelController.dismiss();
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('food:', event.value);
    console.log(this.marketname);
    this.foodname.name = event.value.name;

  }
  
  

  showpicker(){

  }

}

