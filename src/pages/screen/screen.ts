import { Component } from '@angular/core'

@Component({
    templateUrl : 'screen.html'
})

export class ScreenPage {
    private title : string = 'Screenshots'
    private imgs : any[]

    constructor() {
        this.imgs = [
            { title: 'Cybergirl', url: 'https://i.imgur.com/ygk1LDMl.png' },
            { title: 'Dragon', url: 'https://i.imgur.com/vOCpUA9l.png' },
            { title: 'Galactic', url: 'https://i.imgur.com/Vpzg41ml.png' }
        ]
    }

}
