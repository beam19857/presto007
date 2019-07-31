import { Component, OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private nav : NavController) { }

  ngOnInit() {
  }

  onAddorder(){
    this.nav.navigateForward('/home');
  }

  onOrderList(){

    this.nav.navigateForward('/orderlist') ;


  }
  onLogout(){
    this.nav.navigateForward('/login') ;

  }

}
