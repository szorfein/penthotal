import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { PostListPage } from '../blog/post-list'
import { AboutPage } from '../about/about'

@Component({
    selector: 'index-nav',
    templateUrl: 'index_nav.html'
})

export class IndexNavPage {

    private pages = []

    constructor(public nav: NavController) {
    
        this.pages = [
            { title: 'Blog', component: PostListPage },
            { title: 'About', component: AboutPage }
        ]
    }

    openPage(page) {
        this.nav.push(page.component)
    }
}
