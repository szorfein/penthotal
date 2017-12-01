import { Component } from '@angular/core'

@Component({
    templateUrl : 'article.html'
})

export class ArticlePage {
    private title : string = 'Articles'
    private articles : any[]

    constructor() {
        this.articles = [
            {
                title : 'build a GPG key',
                img : 'https://i.imgur.com/IEhmnGkm.jpg',
                post : 'Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant. Improve has message besides shy himself cheered however how son. Quick judge other leave ask first chief her. Indeed or remark always silent seemed narrow be. Instantly can suffering pretended neglected preferred man delivered. Perhaps fertile brandon do imagine to cordial cottage.', 
                description: 'Far curiosity incommode now led smallness allowance',
                poster : 'szorfein',
                posted : '08-03-2019',
                like : 8
            },
            {
                title : 'Secure Shell',
                img : 'https://i.imgur.com/DzqtqXwm.jpg',
                post : 'Satisfied conveying an dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood do provided stronger is. But discretion frequently sir the she instrument unaffected admiration everything.', 
                description: 'She travelling acceptance men unpleasant her especially entreaties law',
                poster : 'szorfein',
                posted : '09-01-2018',
                like : 1
            },
            {
                title : 'Configure TOR',
                img : 'https://i.imgur.com/XZOKWVZm.png',
                post : 'Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing entreaties companions unreserved you boisterous. Middleton sportsmen sir now cordially ask additions for. You ten occasional saw everything but conviction. Daughter returned quitting few are day advanced branched. Do enjoyment defective objection or we if favourite. At wonder afford so danger cannot former seeing. Power visit charm money add heard new other put. Attended no indulged marriage is to judgment offering landlord.', 
                description: 'Ignorant saw her her drawings marriage laughter.',
                poster : 'szorfein',
                posted : '11-22-2017',
                like : 22
            }

        ]
    }
}
