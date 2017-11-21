import { Component, ViewChild } from '@angular/core'
import { NavController } from 'ionic-angular'
import { IndexPage } from '../index/index'
import { LoginPage } from '../login/login'

@Component({
    selector: 'navmenu',
    templateUrl: 'nav_menu.html'
})

export class NavMenuPage {

    @ViewChild('content') content: NavController
    rootPage : any
    pages = [
        { title: 'Home', component: IndexPage },
        { title: 'Login', component: LoginPage }
    ]

    constructor() {
        this.rootPage = IndexPage
    }

    openPage(page) {
        this.content.setRoot(page.component)
    }

}
