import { Component } from '@angular/core'

@Component({
    selector: 'collections',
    templateUrl : 'collections.html'
})

export class CollectionsPage {
    items: any[]
    articles : string

    constructor() {
        this.articles = 'articles'
        this.items = [
            {
                name : 'Photos',
                desc: 'screenshots',
                follower : [ 'doug', 'sre' ]
            },
            { 
                name : 'Art',
                desc: 'Collection of art screen',
                follower: [ 'jed', 'rod', 'satie' ]
            },
            {
                name : 'Wallpapers',
                desc: 'Best background of the web',
                follower: [ 'root', 'luc', 'wagner' ]
            }
        ]
    }
}
