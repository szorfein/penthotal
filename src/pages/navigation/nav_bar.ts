import { Component, Input } from '@angular/core'

@Component({
    selector: 'navbar',
    templateUrl: 'nav_bar.html'
})

export class NavBarPage {
    @Input() title : string

    constructor() {}
}
