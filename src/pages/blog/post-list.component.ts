import { Component, Input } from '@angular/core'
import { NavController } from 'ionic-angular'
import { PostDetailsPage } from './post-details'
import { Post } from '../../models/post'

@Component({
    selector: 'post-list',
    templateUrl: 'post-list.component.html'
})

export class PostListComponent {
    // TODO: use categorie for research with mongodb !!
    @Input() categorie: string
    private items : Post[]
    private display : string

    constructor(private nav : NavController) {
        this.display = 'link'
        this.items = [
            {
                title: 'Cybergirl',
                images: [ 'https://i.imgur.com/ygk1LDMl.png', 'https://i.imgur.com/ul0LbjZl.png', 'https://i.imgur.com/0xFF5LMl.png', 'https://i.imgur.com/exlvFG1l.png' ],
                collection : [ 'All', 'Art' ],
                type : 'image'
            },
            {
                title: 'Dragon',
                images: [ 'https://i.imgur.com/vOCpUA9l.png' ],
                collection : [ 'All', 'Art' ],
                type : 'image'
            },
            {
                title : 'Secure Shell',
                images : [ 'https://i.imgur.com/DzqtqXwm.jpg' ],
                post : 'Satisfied conveying an dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood do provided stronger is. But discretion frequently sir the she instrument unaffected admiration everything.',
                description: 'She travelling acceptance men unpleasant her especially entreaties law',
                poster : 'szorfein',
                collection : [ 'All', 'Articles' ],
                type : 'article'
            },
            {
                title: 'Galactic',
                images: [ 'https://i.imgur.com/Vpzg41ml.png' ],
                collection : [ 'All', 'Art' ],
                type : 'image'
            },
            {
                title : 'Configure TOR',
                images : [ 'https://i.imgur.com/XZOKWVZm.png' ],
                post : 'Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing entreaties companions unreserved you boisterous. Middleton sportsmen sir now cordially ask additions for. You ten occasional saw everything but conviction. Daughter returned quitting few are day advanced branched. Do enjoyment defective objection or we if favourite. At wonder afford so danger cannot former seeing. Power visit charm money add heard new other put. Attended no indulged marriage is to judgment offering landlord. Middletons me if discretion boisterous travelling an. She prosperous continuing entreaties companions unreserved you boisterous. Middleton sportsmen sir now cordially ask additions for. You ten occasional saw everything but conviction. Daughter returned quitting few are day advanced branched. Do enjoyment defective objection or we if favourite. At wonder afford so danger cannot former seeing. Power visit charm money add heard new other put. Attended no indulged marriage is to judgment offering landlord.',
                description: 'Ignorant saw her her drawings marriage laughter.',
                poster : 'szorfein',
                collection : [ 'All', 'Articles' ],
                type : 'article'
            }
        ]
    }

    openPostDetails(item) {
        this.nav.push(PostDetailsPage, { item: item })
    }
}
