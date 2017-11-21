import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IndexPage } from '../pages/index/index'
import { BannerPage } from '../pages/banner/banner'
import { BannerFormPage } from '../pages/banner/banner_form'
import { NavMenuPage } from '../pages/navigation/nav_menu'
import { NavBarPage } from '../pages/navigation/nav_bar'
import { LoginPage } from '../pages/login/login'

import { MyApp } from './app.component';

@NgModule({
  declarations: [
      MyApp,
      IndexPage,
      BannerPage,
      BannerFormPage,
      NavBarPage,
      NavMenuPage,
      LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IndexPage,
    NavMenuPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
