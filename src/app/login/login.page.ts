import { Component, OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

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

  constructor(private Rout : Router,private nav : NavController,public fAuth: AngularFireAuth) { }

  ngOnInit() {
  }
 
  data;
  

  async onlogin() {
    // try {
    //   var r = await this.fAuth.auth.signInWithEmailAndPassword(
    //     this.user.email,
    //     this.user.password
    //   );
    //   if (r) {
    //     console.log("Successfully logged in!");
    //     console.log(r.user.uid);
    //     this.data = r.user.uid;
    //     this.Rout.navigate(['main',this.data]);
    //   }

    // } catch (err) {
    //   alert("email or password not found");
    //   console.error(err);
    // }
    this.nav.navigateForward('/main') ;

  }

  onRegister(){
    this.nav.navigateForward('/register2') ;

  }



   
}
