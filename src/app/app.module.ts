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

// shared
import { SlideComponent } from '../pages/shared/slide'

// post
import { PostListPage } from '../pages/blog/post-list'
import { PostListComponent } from '../pages/blog/post-list.component'
import { PostDetailsPage } from '../pages/blog/post-details'
import { AlbumDetailsPage } from '../pages/blog/album-details'
import { PostCommentFormPage } from '../pages/blog/post-comment-form'
import { ShareComponent } from '../pages/blog/share.component' 

// about
import { AboutPage } from '../pages/about/about'

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
      LoginFormPage,
      PostListPage,
      PostDetailsPage,
      AlbumDetailsPage,
      SlideComponent,
      PostListComponent,
      PostCommentFormPage,
      ShareComponent,
      AboutPage
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
    LoginModalPage,
    PostListPage,
    PostDetailsPage,
    AlbumDetailsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
