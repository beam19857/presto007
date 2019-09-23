import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../login/login.page';


@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})


export class Register2Page implements OnInit {

  public user:User = new User();

  constructor(public navCtrl: NavController,public fAuth: AngularFireAuth) { }

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
        this.navCtrl.navigateRoot('/login')
      }

    } catch (err) {
      console.error(err);
    }
  }

}
