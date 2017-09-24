import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QueryPage } from '../pages/query/query';
import { FIREBASE_CREDENTIAL } from './firebase.credentials';
import { TurnoPage } from '../pages/turno/turno';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QueryPage,
    TurnoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Initialise Angulrfire with credentials from the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIAL),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QueryPage,
    TurnoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
