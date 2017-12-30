export interface Banner {
    _id?: number
    img?: string
    title?: string
    subtitles?: string[]
    testimonials?: [ { 
        name?: string
        site?: string
        comment?: string
    } ]
}
