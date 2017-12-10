import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { ScreenDetailsPage } from './screen-details'

@Component({
    templateUrl : 'screen.html'
})

export class ScreenPage {
    private title : string = 'Screenshots'
    private imgs : any[]

    constructor(public nav: NavController) {
        this.imgs = [
            { title: 'Cybergirl', url: 'https://i.imgur.com/ygk1LDMl.png' },
            { title: 'Dragon', url: 'https://i.imgur.com/vOCpUA9l.png' },
            { title: 'Galactic', url: 'https://i.imgur.com/Vpzg41ml.png' }
        ]
    }

    openScreenDetails(item) {
        this.nav.push(ScreenDetailsPage, { item: item })
    }
}
