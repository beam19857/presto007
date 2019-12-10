import { Component, OnInit } from '@angular/core';
import {NavController,ModalController} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  
  dataUID = 'a' ;

  constructor(private Rout : Router,private activateRoute:ActivatedRoute,private nav : NavController,private fAuth : AngularFireAuth) { }

  ngOnInit() {
    //  this.dataUID = this.activateRoute.snapshot.paramMap.get('myid');
      console.log(this.dataUID);
  }

  onAddorder(){
   // this.Rout.navigate(['home',this.dataUID]);
   this.nav.navigateForward('/home') ;
    
  }

  onOrderList(){

    this.nav.navigateForward('/orderlist') ;


  }
  onLogout(){
    this.fAuth.auth.signOut();
    this.nav.navigateBack('/login')
  }

}
