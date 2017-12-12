import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'

@Component({
    templateUrl: 'screen-details.html'
})

export class ScreenDetailsPage {

    item : any[]
    private display : string

    constructor(params: NavParams) {
        this.display = 'nolink'
        this.item = params.data.item
    }

}
