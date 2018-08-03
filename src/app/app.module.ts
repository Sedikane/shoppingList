import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyDXKPnEJo1Lczb9rQoDqBL7ZDVHHxFEPEc",
  authDomain: "shoppinglist-c46d8.firebaseapp.com",
  databaseURL: "https://shoppinglist-c46d8.firebaseio.com",
  projectId: "shoppinglist-c46d8",
  storageBucket: "",
  messagingSenderId: "1092096798407"
};



@NgModule({
  declarations: [
    MyApp,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase
  
  ]
})
export class AppModule {}
