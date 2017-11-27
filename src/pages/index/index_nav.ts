import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { ArticlePage } from '../article/article'
import { ScreenPage } from '../screen/screen'

@Component({
    selector: 'index-nav',
    templateUrl: 'index_nav.html'
})

export class IndexNavPage {

    private pages = []

    constructor(public nav: NavController) {
    
        this.pages = [
            { title: 'Screenshots', component: ScreenPage },
            { title: 'Articles', component: ArticlePage }
        ]
    }

    openPage(page) {
        this.nav.push(page.component)
    }
}
