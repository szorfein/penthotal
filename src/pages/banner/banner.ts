import { Component, ViewChild } from '@angular/core'
import { Observable } from 'rxjs'
import { Slides } from 'ionic-angular'
import { Banner } from '../../models/banner'

@Component({
    selector: 'banner',
    templateUrl: 'banner.html'
})

export class BannerPage {
    banners: Observable<any[]>
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

    private checkBanners(): Observable<any[]> {
        return Observable.of([
            {
                _id: 0,
                img: '/assets/imgs/bg.jpg',
                portrait: '/assets/imgs/portrait.png',
                title: 'Szorfein',
                subtitles: [
                    'Like GNU/Linux movement, hackers culture & privacy tools',
                    'Discover my contrib (screenshots, wiki at blog)'
                ],
                testimonials: '',
            },
            {
                _id: 1,
                img: '/assets/imgs/bg2.jpg',
                title: '',
                subtitles: [],
                testimonials: [ 
                    { name: 'Luks', site: 'reddit', comment: 'Awesome !!!' } 
                ]
            },
            {
                _id: 2,
                img: '/assets/imgs/bg3.jpg',
                title: '',
                subtitles: [],
                testimonials: [ 
                    { name: 'Luks', site: 'reddit', comment: 'Awesome !!!' }
                ]
            }
        ])
    }
}
