import { Component, Input } from '@angular/core'

@Component({
    selector: 'share',
    templateUrl: 'share.component.html'
})

export class ShareComponent {
    @Input() id : string

    constructor() {}
}
