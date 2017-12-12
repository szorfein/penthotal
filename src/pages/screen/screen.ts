import { Component } from '@angular/core'

@Component({
    templateUrl : 'screen.html'
})

export class ScreenPage {
    private title : string
    private items : any[]
    private display: string

    constructor() {
        this.display = 'link'
        this.title = 'Screenshots'
        this.items = [
            {
                title: 'Cybergirl',
                images: [ 'https://i.imgur.com/ygk1LDMl.png', 'https://i.imgur.com/ul0LbjZl.png', 'https://i.imgur.com/0xFF5LMl.png', 'https://i.imgur.com/exlvFG1l.png' ],
                post: '',
                description: '',
                poster: '',
                posted: '',
                like: ''
            },
            {
                title: 'Dragon',
                images: [ 'https://i.imgur.com/vOCpUA9l.png' ],
                post: '',
                description: '',
                poster: '',
                posted: '',
                like: ''
            },
            {
                title: 'Galactic',
                images: [ 'https://i.imgur.com/Vpzg41ml.png' ],
                post: '',
                description: '',
                poster: '',
                posted: '',
                like: ''
            }
        ]
    }
}
