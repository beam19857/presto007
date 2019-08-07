import { Component, OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private nav : NavController,private fAuth : AngularFireAuth) { }

  ngOnInit() {
  }

  onAddorder(){
    this.nav.navigateForward('/home');
  }

  onOrderList(){

    this.nav.navigateForward('/orderlist') ;


  }
  onLogout(){
    this.fAuth.auth.signOut();

  }

}
