import { Component, ViewChild } from '@angular/core'
import { NavController } from 'ionic-angular'
import { IndexPage } from '../index/index'

@Component({
    selector: 'navmenu',
    templateUrl: 'nav_menu.html'
})

export class NavMenuPage {

    @ViewChild('content') content: NavController
    rootPage : any
    pages = [
        { title: 'Home', component: IndexPage }
    ]

    constructor() {
        this.rootPage = IndexPage
    }

    openPage(page) {
        this.content.setRoot(page.component)
    }

}
