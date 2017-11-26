import { Component } from '@angular/core'
import { AlertController } from 'ionic-angular'
import { FormGroup , FormControl , Validators } from '@angular/forms'

@Component({
    selector: 'bannerform',
    templateUrl: 'banner_form.html'
})

export class BannerFormPage {
    form

    constructor(private alertCtrl: AlertController) {
        this.form = new FormGroup({
            title: new FormControl("", Validators.required),
            subtitle: new FormControl("", Validators.required),
            image: new FormControl("", Validators.required)
        })
    }

    doAlert() {
        let alert = this.alertCtrl.create({
            title: 'Edit banner',
            message: '',
            inputs: [
                {
                    name: this.form.value.title,
                    placeholder: 'Title'
                },
                {
                    name: this.form.value.subtitle,
                    placeholder: 'Subtitle'
                },
                {
                    name: this.form.value.image,
                    placeholder: 'image.jpg'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked')
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked')
                    }
                }
            ]
        })
        alert.present()
    }

}
