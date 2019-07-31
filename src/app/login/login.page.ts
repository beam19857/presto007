import { Component, OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private nav : NavController) { }

  ngOnInit() {
  }


    onLogin(){
        this.nav.navigateForward('/main');
    }
}
