import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModelPagePageModule } from './model-page/model-page.module';
import {ModeldrinkPageModule} from './modeldrink/modeldrink.module'
import {ModelsnackPageModule} from './modelsnack/modelsnack.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {SelectSearchableModule} from 'ionic-select-searchable'
import { IonicSelectableModule } from 'ionic-selectable';
import { ModelselectPageModule } from './modelselect/modelselect.module';
import {AngularFireModule} from 'angularfire2'
import {AngularFireAuthModule} from 'angularfire2/auth'
import { LoginPageModule } from './login/login.module';
import { HttpModule } from '@angular/http';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModelfruitPageModule } from './modelfruit/modelfruit.module';
import { ModelbuffonePageModule } from './modelbuffone/modelbuffone.module';
import { ModelbufftwoPageModule } from './modelbufftwo/modelbufftwo.module';
import { ModelgrillPageModule } from './modelgrill/modelgrill.module';
import { globalVariable } from './globalVariable';






const config = {
  apiKey: "AIzaSyC_Dkyj0M9gL4CbxpgO69XBpNh8HTHCYUU",
    authDomain: "prestorealtime.firebaseapp.com",
    databaseURL: "https://prestorealtime.firebaseio.com",
    projectId: "prestorealtime",
    storageBucket: "prestorealtime.appspot.com",
    messagingSenderId: "963606022492",
    appId: "1:963606022492:web:3991352b88f48b20"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ModelPagePageModule,
    ModeldrinkPageModule,
    ModelsnackPageModule,
    ModelfruitPageModule,
    ModelbuffonePageModule,
    ModelbufftwoPageModule,
    ModelgrillPageModule,
    FormsModule,
    SelectSearchableModule,
    IonicSelectableModule,
    ModelselectPageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    LoginPageModule,
    HttpModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    globalVariable,
    SplashScreen,
    AngularFirestore,
    { provide: RouteReuseStrategy , useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
