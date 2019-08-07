import { Component, OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

  export class User {
    email: string;
    password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user:User = new User();

  constructor(private nav : NavController,public fAuth: AngularFireAuth) { }

  ngOnInit() {
  }


  async onlogin() {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully logged in!");
        this.nav.navigateRoot('/main')
      }

    } catch (err) {
      alert("email or password not found");
      console.error(err);
    }
  }

  onRegister(){
    this.nav.navigateForward('/register2') ;

  }
}
