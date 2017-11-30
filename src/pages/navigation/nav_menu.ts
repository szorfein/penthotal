import { Component, ViewChild } from '@angular/core'
import { NavController } from 'ionic-angular'
import { IndexPage } from '../index/index'
import { ScreenPage } from '../screen/screen'
import { ArticlePage } from '../article/article'

@Component({
    selector: 'navmenu',
    templateUrl: 'nav_menu.html'
})

export class NavMenuPage {

    @ViewChild('content') content: NavController
    rootPage : any
    pages = [
        { title: 'Home', component: IndexPage },
        { title: 'Articles', component: ArticlePage },
        { title: 'Screenshots', component: ScreenPage }
    ]

    constructor() {
        this.rootPage = IndexPage
    }

    openPage(page) {
        this.content.setRoot(page.component)
    }

}
