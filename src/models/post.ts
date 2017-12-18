export interface Post {
    _id?: number
    posted?: { 
        origin?: Date 
        edit?: Date
        nb?: number
    }
    title?: string
    images?: string[]
    post?: string
    description?: string
    poster?: string
    like?: string[]
    collection?: string[]
    type?: string
}
