import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'login-form',
    templateUrl: './login_form.html'
})

export class LoginFormPage {
    form

    constructor() {
        this.form = new FormGroup({
            firstName : new FormControl('', Validators.required),
            password : new FormControl('', Validators.required)
        })
    }

    loginForm() {
        if (this.form.status === 'VALID') {
            console.log('login success')
        }
    }
}
