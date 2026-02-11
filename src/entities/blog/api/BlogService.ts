import { SERVER_URL_API } from "@/src/app/env/env"
import { IBlogCategory, IBlogDetail, IBlogMiniature } from "../model/types"



class BlogService {

    async getAll(){
        const res = await fetch(SERVER_URL_API + '/v1/blogs', 
            {
                cache: "no-cache"
            }
        )
        const {blogs}: {blogs: IBlogMiniature[]} = await res.json()
        return blogs
    }

    async getAllFilter(categoriesIds: number[]){
        const res = await fetch(SERVER_URL_API + '/v1/blogs/filter', 
            {
                method: "POST",
                body: JSON.stringify({categoriesIds}),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                cache: "no-cache"
            }
        )
        const {blogs}: {blogs: IBlogMiniature[]} = await res.json()
        return blogs
    }

    async getCategories(){
        const res = await fetch(SERVER_URL_API + '/v1/blogs/categories', 
            {
                cache: "no-cache"
            }
        )
        const {categories}: {categories: IBlogCategory[]} = await res.json()
        return categories
    }

    async getBlogsDoctor(doctorSlug: string): Promise<IBlogMiniature[]> {
        const response = await fetch(SERVER_URL_API + '/v1/blogs/doctor/' + doctorSlug,
            {
                next: {revalidate: 60}
            }
        )
        const {blogs}: {blogs: IBlogMiniature[]} = await response.json()
        return blogs
    }

    async getTop(){
        const res = await fetch(SERVER_URL_API + '/v1/blogs/top', 
            {
                cache: "no-cache"
            }
        )
        const {blogs}: {blogs: IBlogMiniature[]} = await res.json()
        return blogs
    }

    async get(slug: string){
        const res = await fetch(SERVER_URL_API + '/v1/blog/' + slug, 
            {
                cache: "no-cache"
            }
        )
        const blog: IBlogDetail = await res.json()
        return blog
    }

}

export const blogService = new BlogService()