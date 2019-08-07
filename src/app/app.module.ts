import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModelPagePageModule } from './model-page/model-page.module';
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
    FormsModule,
    SelectSearchableModule,
    IonicSelectableModule,
    ModelselectPageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    LoginPageModule,
    HttpModule,
    
    
  
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
