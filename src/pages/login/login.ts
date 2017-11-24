import { Component } from '@angular/core'
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'login.html'
})

export class LoginPage {
    title : string = 'Login'

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {}

    dismiss() {
        this.viewCtrl.dismiss()
    }
}
