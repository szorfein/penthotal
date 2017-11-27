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

import { MyApp } from './app.component';

// index
import { IndexNavPage } from '../pages/index/index_nav'

// login
import { LoginModalPage } from '../pages/login/login_modal' 
import { LoginPage } from '../pages/login/login'
import { LoginFormPage } from '../pages/login/login_form'

@NgModule({
  declarations: [
      MyApp,
      IndexPage,
      IndexNavPage,
      BannerPage,
      BannerFormPage,
      NavBarPage,
      NavMenuPage,
      LoginPage,
      LoginModalPage,
      LoginFormPage
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
    LoginPage,
    LoginModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
