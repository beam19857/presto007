import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modelgrill',
  templateUrl: './modelgrill.page.html',
  styleUrls: ['./modelgrill.page.scss'],
})
export class ModelgrillPage implements OnInit {

  constructor(private modelController : ModalController) { }

  ngOnInit() {
  }



  closePage(){
    //this.createMenu();
    this.modelController.dismiss();
  // ======================================================= test
   
  // ======================================================= test
  }
}
