import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'

@Component({
    templateUrl: 'post-details.html'
})

export class PostDetailsPage {

    item: any[]

    constructor(params: NavParams) {
        this.item = params.data.item
    }

}
