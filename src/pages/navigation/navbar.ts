import { Component, Input } from '@angular/core'
import { App, MenuController } from 'ionic-angular'
import { IndexPage } from '../index/index'

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.html'
})

export class NavbarPage {
    rootPage : any = IndexPage
    @Input() title: string

    constructor(app: App, menu: MenuController) {
        menu.enable(true)
    }
}
