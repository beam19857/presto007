import { Component, OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import { LoginService } from './login.service';

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

  constructor(private Rout : Router,private nav : NavController,public fAuth: AngularFireAuth,
    
    private loginService :LoginService,
    ) { }

  ngOnInit() {
  }
 
  data;
  

  onLogin() {
    
    console.log("Presto5555555");
    this.loginService.onLogin().subscribe(
      data => {
        console.log("login!!");
        console.log(data);       
      }

    );



  }

  onRegister(){
    this.nav.navigateForward('/register2') ;

  }



   
}
