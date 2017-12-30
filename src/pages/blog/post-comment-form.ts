import { Component, Input } from '@angular/core'
import { AlertController } from 'ionic-angular'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'post-comment',
    templateUrl: 'post-comment-form.html'
})

export class PostCommentFormPage {
    @Input() id: string
    form

    constructor(private alertCtrl: AlertController) {
        console.log('id post= ' +this.id)
        this.form = new FormGroup({
            post: new FormControl("", Validators.required)
        })
    }

    doAlert() {
        let alert = this.alertCtrl.create({
            title: 'Comment',
            message: '',
            inputs: [
                {
                    name: '',
                    placeholder: 'Post a comment'
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
                        console.log('Saved Clicked')
                    }
                }
            ]
        })
        alert.present()
    }

}
