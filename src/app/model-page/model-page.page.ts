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

   items2: AngularFireList<any> = null; //เชื่อมไฟเบส
   items4 : Observable<any[]>; //เชื่อ UI
   newTask = {name: ''}; //เพิ่มเข้าไฟเบส

   baskets0 : AngularFireList<any> = null;
   baskets1 : Observable<any[]>;
   newBaskets = {UID : ''}

   basketKey;
   marketKey;

   menuData;
/* 
      menu design -- > food amout , option amount , food opject , option opject ,0

   */
  MainCourseList = [];
  RawMaterialList = [];
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
  mainCourseCheck = false;



  
  constructor(
    private modelService : ModelsService,
    private navPara:NavParams,
    private modelController : ModalController,
    private pickerCtrl: PickerController,
    private db: AngularFireDatabase,
    private aft :AngularFirestore
    ) {
      this.items2 = db.list('test');
      this.items4 = this.items2.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );

      console.log(this.items4)





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
    this.marketname = this.navPara.get('markets');
    this.userID = this.navPara.get('userID');
    this.marketKey = this.navPara.get('marketKey');
    this.basketKey = this.navPara.get('basketKey')
    console.log(this.marketname);

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
    

   this.modelService.getMenu(this.marketname).subscribe(
    data => {
      console.log("get Data menu");
      console.log(data);
      //this.market = JSON.stringify(data[0].id);
      // data[value of id] . parameter of oject
      for(var i = 0; i < data.length; i++){
        this.marketMenuList.push(data[i]);
        
       // console.log((data[i])); //here you'll get sendernewcall value for all entry
      //  console.log(this.marketMenuList);
      }
    }
    
  );

  
  this.modelService.getTypeMenu().subscribe(
    data => {
      console.log("get Data TypeMenu");
      console.log(data);
      //this.market = JSON.stringify(data[0].id);
      // data[value of id] . parameter of oject
      for(var i = 0; i < data.length; i++){
        this.foodlist.push(data[i]);
        
       // console.log((data[i])); //here you'll get sendernewcall value for all entry
      //  console.log(this.foodlist);
      }
    }
    
  );

  this.modelService.getRawMaterial().subscribe(
    data => {
      console.log("get Data");
      console.log(data);
      //this.market = JSON.stringify(data[0].id);
      // data[value of id] . parameter of oject
      for(var i = 0; i < data.length; i++){
        this. RawMaterialList .push(data[i]);
        
       // console.log((data[i])); //here you'll get sendernewcall value for all entry
       // console.log(this. RawMaterialList );
      }
    }
    
  );
  this.modelService.getMainCourseByMarket(this.marketname).subscribe(
    data => {
      console.log("get Data");
      console.log(data);
      //this.market = JSON.stringify(data[0].id);
      // data[value of id] . parameter of oject
      for(var i = 0; i < data.length; i++){
        this.MainCourseList.push(data[i]);
        
       // console.log((data[i])); //here you'll get sendernewcall value for all entry
       // console.log(this. RawMaterialList );
      }
      console.log(this.MainCourseList);
    }
     
  );



    console.log(this.userID);
   

    console.log(this.marketMenuList)

      }
    
  closePage(){
    //this.createMenu();
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


createMenu(basketKey,marketKey,menu)  {
  firebase.database().ref('baskets/'+basketKey+'/'+marketKey+'/'+menu)
}

checkMainCourse(){
  

}


  
  

  showpicker(){

  }


}
