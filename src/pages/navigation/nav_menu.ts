import { Component, ViewChild } from '@angular/core'
import { NavController } from 'ionic-angular'
import { IndexPage } from '../index/index'
import { PostListPage } from '../blog/post-list'

@Component({
    selector: 'navmenu',
    templateUrl: 'nav_menu.html'
})

export class NavMenuPage {

    @ViewChild('content') content: NavController
    rootPage : any
    pages = [
        { title: 'Home', component: IndexPage },
        { title: 'Blog', component: PostListPage }
    ]

    constructor() {
        this.rootPage = IndexPage
    }

    openPage(page) {
        this.content.setRoot(page.component)
    }

}
