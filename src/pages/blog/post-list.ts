import { Component } from '@angular/core'

@Component({
    templateUrl : 'post-list.html'
})

export class PostListPage {
    private collections : any[]
    articles : string
    private title : string

    constructor() {
        this.articles = 'articles'
        this.collections = [
             {
                name : 'All',
                desc: 'all blog posts',
                follower : [ 'doug', 'sre' ]
            },
            {
                name : 'Photos',
                desc: 'screenshots',
                follower : [ 'doug', 'sre' ]
            },
            {
                name : 'Articles',
                desc: 'Wikis',
                follower: [ 'jed', 'rod', 'satie' ]
            },
            {
                name : 'Wallpapers',
                desc: 'Best background of the web',
                follower: [ 'root', 'luc', 'wagner' ]
            }
        ]
        this.title = 'Blog'
    }

}
