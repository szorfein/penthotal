import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Index } from '../../models/index'

@Component({
    templateUrl: 'index.html'
})

export class IndexPage {
    indexMsgs: Observable<Index[]>

    constructor() {
        this.indexMsgs = this.checkIndex()
    }

    private checkIndex(): Observable<Index[]> {
        return Observable.of([
            {
                _id: 0,
                img: '/assets/imgs/bg.jpg',
                title: 'Evil Corp',
                subtitle: 'Evil Corp control the world'
            }
        ])
    }

}
