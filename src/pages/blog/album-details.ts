import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'

@Component({
    templateUrl: 'album-details.html'
})

export class AlbumDetailsPage {

    item : any[]
    private display : string

    constructor(params: NavParams) {
        this.display = 'nolink'
        this.item = params.data.item
    }
}
