import { SERVER_URL_API } from "@/src/app/env/env"
import { IBlogDetail, IBlogMiniature } from "../model/types"



class BlogService {

    async getAll(){
        const res = await fetch(SERVER_URL_API + '/v1/blogs')
        const {blogs}: {blogs: IBlogMiniature[]} = await res.json()
        return blogs
    }

    async getTop(){
        const res = await fetch(SERVER_URL_API + '/v1/blogs/top')
        const {blogs}: {blogs: IBlogMiniature[]} = await res.json()
        return blogs
    }

    async get(slug: string){
        const res = await fetch(SERVER_URL_API + '/v1/blog/' + slug)
        const blog: IBlogDetail = await res.json()
        return blog
    }

}

export const blogService = new BlogService()