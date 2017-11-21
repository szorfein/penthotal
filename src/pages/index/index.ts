import { Component } from '@angular/core'
import { App , MenuController } from 'ionic-angular'

@Component({
    templateUrl: 'index.html'
})

export class IndexPage {
    title : string = 'Index'

    constructor(
        app: App, 
        menu: MenuController
    ) { menu.enable(true) }

}
