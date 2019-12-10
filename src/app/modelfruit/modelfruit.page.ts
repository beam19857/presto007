import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modelfruit',
  templateUrl: './modelfruit.page.html',
  styleUrls: ['./modelfruit.page.scss'],
})
export class ModelfruitPage implements OnInit {

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
