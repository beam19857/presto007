import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {  NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class User {
  email: string;
  password: string;
}


export class RegisterPage implements OnInit {

  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth) { }

  public user:User = new User();

  ngOnInit() {
  }

  async register() {
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully registered!");
        this.navCtrl.navigateRoot('login')
      }

    } catch (err) {
      console.error(err);
    }
  }

}
