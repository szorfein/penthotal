import { Component, OnInit, ViewChild } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
    templateUrl: 'index.html'
})

export class IndexPage implements OnInit {
    @ViewChild('myNav') nav: NavController
    title : string = 'index'

    constructor() {}

    ngOnInit() {}
}
