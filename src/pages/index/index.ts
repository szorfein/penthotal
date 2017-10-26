import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Index } from '../../models/index'

@Component({
    templateUrl: 'index.html'
})

export class IndexPage {
    backgroundImage: Observable<Index[]>

    constructor() {
        this.backgroundImage = this.checkIndex()
    }

    private checkIndex(): Observable<Index[]> {
        return Observable.of([
            {
                _id: 0,
                img: 'localhost/asset/bg.jpg',
                title: 'Hello',
                subtitle: 'Unix Roxx !'
            },
            {
                _id: 1,
                img: 'localhost/asset/bg.jpg',
                title: 'Second useless msg',
                subtitle: 'And we go...'
            }
        ])
    }

}
