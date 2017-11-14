import { Component, ViewChild } from '@angular/core'
import { Observable } from 'rxjs'
import { Slides } from 'ionic-angular'
import { Banner } from '../../models/banner'

@Component({
    selector: 'banner',
    templateUrl: 'banner.html'
})

export class BannerPage {
    banners: Observable<Banner[]>
    @ViewChild(Slides) slides: Slides

    constructor() {
        this.banners = this.checkBanners()
    }

    goToSlide() {
        this.slides.slideTo(2, 500)
    }

    slideChanged() {
        let currentIndex = this.slides.getActiveIndex()
        console.log('Current index is', currentIndex)
    }

    private checkBanners(): Observable<Banner[]> {
        return Observable.of([
            {
                _id: 0,
                img: '/assets/imgs/bg.jpg',
                title: 'Evil Corp',
                subtitle: 'Evil Corp control the world'
            },
            {
                _id: 1,
                img: '/assets/imgs/bg.jpg',
                title: 'Control Network',
                subtitle: 'Evil Corp control the net'
            },
            {
                _id: 2,
                img: '/assets/imgs/bg.jpg',
                title: 'Control all',
                subtitle: 'Evil Corp all'
            }
        ])
    }
}
