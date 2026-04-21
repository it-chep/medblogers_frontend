import { SERVER_URL_API } from "@/src/app/env/env"
import { fetchServer } from "@/src/shared/api/fetchServer"
import { IBlogCategory, IBlogDetail, IBlogMiniature, IBlogSearch } from "../model/types"
import { MyError } from "@/src/shared/lib/error/MyError"



class BlogService {

    async getAll(){
        const res = await fetchServer(SERVER_URL_API + '/v1/blogs', 
            {
                cache: "no-cache"
            }
        )
        const {blogs}: {blogs: IBlogMiniature[]} = await res.json()
        return blogs
    }

    async getAllFilter(categoriesIds: number[]){
        const res = await fetchServer(SERVER_URL_API + '/v1/blogs/filter', 
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
        const res = await fetchServer(SERVER_URL_API + '/v1/blogs/categories', 
            {
                cache: "no-cache"
            }
        )
        const {categories, allBlogsCount}: {categories: IBlogCategory[], allBlogsCount: number} = await res.json()
        return {categories, allBlogsCount}
    }

    async getBlogsDoctor(doctorSlug: string): Promise<IBlogMiniature[]> {
        const response = await fetchServer(SERVER_URL_API + '/v1/blogs/doctor/' + doctorSlug,
            {
                cache: "no-cache"
            }
        )
        const {blogs}: {blogs: IBlogMiniature[]} = await response.json()
        return blogs
    }

    async getTop(){
        const res = await fetchServer(SERVER_URL_API + '/v1/blogs/top', 
            {
                cache: "no-cache"
            }
        )
        const {blogs}: {blogs: IBlogMiniature[]} = await res.json()
        return blogs
    }

    async getRecommendations(blogSlug: string){
        const res = await fetchServer(SERVER_URL_API + '/v1/blog/' + blogSlug + '/recommendations',
            {
                cache: "no-cache"
            }
        )
        const {blogs}: {blogs: IBlogMiniature[]} = await res.json()
        return blogs
    }

    async get(slug: string){
        const res = await fetchServer(SERVER_URL_API + '/v1/blog/' + slug, 
            {
                cache: "no-cache"
            }
        )
        const blog: IBlogDetail = await res.json()
        return blog
    }

    async addView(blogSlug: string, cookieId: string){
        await fetchServer(SERVER_URL_API + `/v1/blog/${blogSlug}/add_view`, {
            method: "POST",
            body: JSON.stringify({
                blogSlug,
                cookieId
            }),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            cache: "no-cache"
        })
    }

    controller: AbortController | null = null;

    async search(query: string){

        if(this.controller){
            this.controller.abort()
        }

        this.controller = new AbortController()

        const res = await fetchServer(SERVER_URL_API + `/v1/blogs/search`, {
            method: "POST",
            body: JSON.stringify({
                query,
            }),
            signal: this.controller.signal,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            cache: "no-cache"
        })

        if(!res.ok) {
            throw new MyError('РћС€РёР±РєР° РїСЂРё Р·Р°РїСЂРѕСЃРµ', res.status)
        }

        const {blogs}: {blogs: IBlogSearch[]} = await res.json()

        this.controller = null;

        return blogs
    }
}

export const blogService = new BlogService()
