import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from '@ionic/angular';
 
@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.page.html',
  styleUrls: ['./model-page.page.scss'],
})
export class ModelPagePage implements OnInit {

  constructor(private navPara:NavParams,private modelController : ModalController) { }

  ngOnInit() {
  }

  closePage(){
    this.modelController.dismiss();
  }

}
