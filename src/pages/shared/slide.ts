import { Component, Input, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { Slides, NavController } from 'ionic-angular'

import { AlbumDetailsPage } from '../blog/album-details'

enum Display { link, nolink }

@Component({
    selector: 'slide',
    templateUrl: 'slide.html'
})

export class SlideComponent implements OnInit {

    @ViewChild(Slides) slides: Slides
    @Input() images : string[]
    @Input() display : string
    len : number

    @ViewChild('blockStart')
    blockStart: TemplateRef<any>|null = null;
    @ViewChild('blockEnd')
    blockEnd: TemplateRef<any>|null = null;
    @ViewChild('blockDual')
    blockDual: TemplateRef<any>|null = null;

    slideWindow : TemplateRef<any>|null = null;

    displayLink : boolean = false
    displayNoLink : boolean = false

    constructor(public nav: NavController) {}

    ngOnInit() {
        this.lookDisplay()
        this.len = this.images.length
        this.slideWindow = this.blockStart
    }

    goNext() {
        this.slides.slideNext()

        if (this.slides.isEnd() || this.isEnd()) {
            this.slideWindow = this.blockEnd
        } else {
            this.slideWindow = this.blockDual
        }
    }

    goPrev() {
        this.slides.slidePrev()

        if (this.slides.isBeginning() || this.isStart()) {
            this.slideWindow = this.blockStart
        } else {
            this.slideWindow = this.blockDual
        }
    }

    openScreenDetails(item) {
        this.nav.push(AlbumDetailsPage, { item: item })
    }

    private isEnd() {
        let currentIndex = this.slides.getActiveIndex()
        return !!(currentIndex == this.len)
    }

    private isStart() {
        let currentIndex = this.slides.getActiveIndex()
        return !!(currentIndex == 0)
    }

    private lookDisplay() {
        if (this.display == Display[0]) {
            this.displayLink = true
        } else if (this.display == Display[1]) {
            this.displayNoLink = true
        } 
    }
}
