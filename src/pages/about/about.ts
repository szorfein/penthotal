import { Component } from '@angular/core'

@Component({
    templateUrl: 'about.html'
}) 

export class AboutPage {

    title : string
    post : {}

    constructor() {
        this.title = 'About'
        this.post = {
            portrait: '/assets/imgs/portrait.png',
            name: 'Szorfein',
            job: 'Activist',
            desc: {
                city: '',
                hobbies: ''
            },
            site: '',
            socials: [
                {
                    url: '', 
                    domain: ''
                }
            ],
            skills: [
                {
                    language: '',
                    projectNb: ''
                }
            ]
        }
    }
}
