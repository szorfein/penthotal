import { Component } from '@angular/core'
import { ModalController } from 'ionic-angular'
import { LoginPage } from './login'

@Component({
    selector: 'login_modal',
    templateUrl: 'login_modal.html'
})

export class LoginModalPage {
    constructor(public modalCtrl : ModalController) {}

    loginModal() {
        let modal = this.modalCtrl.create(LoginPage)
        modal.present()
    }

}
