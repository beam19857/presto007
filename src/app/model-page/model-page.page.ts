import { Component, OnInit, ViewChild } from '@angular/core';
import {NavParams,ModalController, PickerController} from '@ionic/angular';
import {SelectSearchableModule, SelectSearchableComponent} from 'ionic-select-searchable'
import { IonicSelectableComponent } from 'ionic-selectable';
import { ModelsService } from './models.service';
import * as firebase from 'firebase';
import { snapshotToArray } from '../data/user';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import {AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'





//================================================================================== test
export interface FOODSxOPTIONS {
  opName: string;
  opAmount: number;
  opPrice: number;
  foodName: string;
  foodAmount: number
  foodPrice: number;
  totalprice: number;
}  
export interface FOODS { //ลบ interace ได้ถ้าไม่ใช้
  id: any;
  type: string;
  name: string;
  price: number;
}
export interface TOPPINGS { //ลบ interface ได้ถ้าไม่ใช้
  id: any;
  type: string;
  name: string;
  price: number;
}

const FOOD_DATA: FOODS[] = [ //ลบ constance ได้ถ้าไม่ใช้
  {id: 0, type: 'food', name: 'A', price: 30},
  {id: 1, type: 'food', name: 'B', price: 35},
  {id: 2, type: 'food', name: 'C', price: 40},
  {id: 3, type: 'food', name: 'D', price: 50},
  {id: 4, type: 'food', name: 'E', price: 60},
];
const TOPPING_DATA: FOODS[] = [
  {id: 0, type: 'food', name: 'X', price: 5},
  {id: 1, type: 'food', name: 'Y', price: 10},
];
//================================================================================== test
 
 
@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.page.html',
  styleUrls: ['./model-page.page.scss'],
})
export class ModelPagePage implements OnInit {
//================================================================================== test
  FoodsXOptions: Array<FOODSxOPTIONS>  = [];
  totalPrice: number = 0;
//================================================================================== test
   possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
   lengthOfCode:number = 40;

   items2: AngularFireList<any> = null;
   items4 : Observable<any[]>;




  marketMenuList = [];
  marketMenu ;
  optionFoodLists = []; 
  optionFoodList = [];
  optionDrinkList = [];
  optionFood ;
  optionDrink;
  option ;
  marketname ;
  foodlist = [];
  food ;
  foodname  ;
  optionname;
  items = [];
  ref = firebase.database().ref();
  amountMenu:number  ;
  amountOption : number ;
  userID ;
  keyMenu;
  keyOption;

  
  constructor(
    private modelService : ModelsService,
    private navPara:NavParams,
    private modelController : ModalController,
    private pickerCtrl: PickerController,
    private db: AngularFireDatabase,
    private aft :AngularFirestore
    ) {
      this.items2 = db.list('/tasks');
      this.items4 = this.items2.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
      this.amountMenu = 0;
      this.amountOption = 0;
      this.ref.on('value',resp => {
        this.items = snapshotToArray(resp)  
      });
   }
   addItem(item){
     let newItem = this.ref.push();
     newItem.set(item)
   }

  ngOnInit() {

    this.keyMenu = this.makeKey(this.lengthOfCode,this.possible);
    console.log(this.keyMenu);

    this.keyOption = this.makeKey(this.lengthOfCode,this.possible);
    console.log(this.keyOption)

   
    
    


    this.foodname = {
      name : '',
  }
    this.optionname = {
      name : ''
    }
    this.food = {id:'',name:'',exFood:'',priceBase:'',markets:''}
   // this.option = {id:'',name:'',price:'',typefoods:'',markets:''}
    this.marketname = this.navPara.get('markets');
    this.userID = this.navPara.get('userID');
    console.log(this.userID);
    this.modelService.getFoodBymarketname(this.marketname).subscribe(
      data => {
        console.log("get Data");
        console.log(data);
        for(var i = 0; i < data.length; i++){ 
          if(data[i].exFood == 'extra'){
              data[i].name += " พิเศษ"
          }
          data[i].name += " " + data[i].priceBase + " บาท"
          this.foodlist.push(data[i]);
          this.marketMenuList.push(data[i]);
        }        
      }     
    );
      this.modelService.getDrinkByMarketName(this.marketname).subscribe(
          data => {
              for(var i = 0 ; i < data.length ; i ++){
                if(data[i].typefoods == 'hot')
                data[i].name += " " + "ร้อน " + data[i].priceBase
                else if (data[i].typefoods == 'cool')
                data[i].name += " " + "เย็น " + data[i].priceBase
                else
                data[i].name += " " + "ปั่น " + data[i].priceBase
                this.marketMenuList.push(data[i]);
              }
          }
      );
       this.modelService.getSnackByMarketName(this.marketname).subscribe(
          data => {
            for(var i = 0 ; i < data.length ; i ++){
              if(data[i].exFood == 'extra'){
                data[i].name += " พิเศษ"
            }
            data[i].name += " " + data[i].priceBase + " บาท"
              this.marketMenuList.push(data[i]);
            }
          }

      );
 



    this.modelService.getOptionByMarketName(this.marketname).subscribe(
      data => {
        console.log("get Data");
        console.log(data);
        for(var i = 0; i < data.length; i++){ 
              data[i].name += " " + data[i].price + " บาท"
              if(data[i].typefoods == 'food')
                 this.optionFoodList.push(data[i]);
              else
                this.optionDrinkList.push(data[i]);
        }        
      }     
    );

    console.log(this.marketMenuList)

      }
    
  closePage(){
    this.createItem()
    this.modelController.dismiss();
// ======================================================= test
    this.CalPrice(this.totalPrice)
// ======================================================= test
  }

//================================================================================== test
  CalPrice(totalPrice: number){
    totalPrice += (this.marketMenu.price + (this.option.price * this.amountOption)) * this.amountMenu;
    this.FoodsXOptions.push({
      opName: this.optionname,
      opAmount: this.amountOption,
      opPrice: this.option.price,
      foodName: this.foodname,
      foodAmount: this.amountMenu,
      foodPrice: this.marketMenu.price,
      totalprice: totalPrice
    })
    console.table(this.FoodsXOptions)
    return totalPrice
  }
//================================================================================== test

  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('food:', event.value);
    console.log(this.marketname);
    this.foodname.name = event.value.name;
    if(event.value.typefood == 'food')
    this.optionFoodLists = this.optionFoodList;
    else
    this.optionFoodLists = this.optionDrinkList;

  }

  portChange2(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('food:', event.value);
    console.log(this.marketname);
    this.optionname.name = event.value.name
    

  }
    onIncreaseMenu(){
        this.amountMenu++;

    }
    onIncreaseOption(){
      this.amountOption++;
         


    }

    onDecreaseMenu(){
      this.amountMenu--;
        if(this.amountMenu <= 0)
          this.amountMenu = 0 ;



    }
    onDecreaseOption(){
      this.amountOption--;
        if(this.amountOption <= 0)
          this.amountOption = 0;
         


    }
 makeKey(lengthOfCode: number, possible: string) {
  
  let text = "";
  for (let i = 0; i < lengthOfCode; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    return text;
}


createItem()  {
  
}
  

  
  

  showpicker(){

  }


}
