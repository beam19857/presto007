import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modelsnack',
  templateUrl: './modelsnack.page.html',
  styleUrls: ['./modelsnack.page.scss'],
})
export class ModelsnackPage implements OnInit {

  amountMenu:number ;
  foodname;

  constructor(private modelController : ModalController,) {
    this.amountMenu = 1;

   }

  ngOnInit() {
      
  }

  onIncreaseMenu(){
    this.amountMenu++;

}
onDecreaseMenu(){
  this.amountMenu--;
    if(this.amountMenu <= 1)
      this.amountMenu = 1 ;
}

closePage(){
  //this.createMenu();
  this.modelController.dismiss();
// ======================================================= test
 
// ======================================================= test
}

}
