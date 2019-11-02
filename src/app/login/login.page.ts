import { Component, OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import { LoginService } from './login.service';

  export class User {
    email: any;
    password: "";
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:"";
  email:any;
  password:"";
  http: any;


  users={
    username:"",
    password:""
  }


  constructor(
    private Rout : Router,
    private nav : NavController,
    public fAuth: AngularFireAuth,
    private LoginService :LoginService,
    ) { }

  ngOnInit() {
  }
 

  

  onLogin() {
    
    console.log(this.users);
    
    this.LoginService.onLogininput(this.users).subscribe(
      data => {
        console.log("login!!");
        console.log(data);  
                 if( data == this.users.username ){
                       console.log("done!!");
                       this.nav.navigateForward('/home') ;
                }else
                         alert("รหัสผ่านหรืออีเมลผิด")
      }     
      
    );
    
  }

  onRegister(){
    this.nav.navigateForward('/register2') ;

  }



   
}
