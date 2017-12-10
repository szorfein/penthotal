import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'

@Component({
    templateUrl: 'screen-details.html'
})

export class ScreenDetailsPage {

    item : [ {title: string, url: string }]

    constructor(params: NavParams) {
        this.item = params.data.item
    }

}
