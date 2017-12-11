import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { Slides } from 'ionic-angular'

@Component({
    selector: 'slide',
    templateUrl: 'slide.html'
})

export class SlideComponent implements OnInit {

    @ViewChild(Slides) slides: Slides
    @Input() images : string[]
    len : number

    @ViewChild('blockStart')
    blockStart: TemplateRef<any>|null = null;
    @ViewChild('blockEnd')
    blockEnd: TemplateRef<any>|null = null;
    @ViewChild('blockDual')
    blockDual: TemplateRef<any>|null = null;

    slideWindow : TemplateRef<any>|null = null;

    constructor() {}

    ngOnInit() {
        this.len = this.images.length
        this.slideWindow = this.blockStart
    }

    goNext() {
        this.slides.slideNext()
        if (this.slides.isEnd()) {
            this.slideWindow = this.blockEnd
        } else {
            this.slideWindow = this.blockDual
        }
    }

    goPrev() {
        this.slides.slidePrev()
        if (this.slides.isBeginning()) {
            this.slideWindow = this.blockStart
        } else {
            this.slideWindow = this.blockDual
        }
    }

}
