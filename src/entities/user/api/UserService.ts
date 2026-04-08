import { SERVER_URL_API } from "@/src/app/env/env"


class UserService {

    async createCookieId(domain?: string): Promise<string> {
        const token = process.env.NEXT_PUBLIC_TOKEN;

        const res = await fetch(SERVER_URL_API + '/v1/analytics/create_cookie_id',
            {
                method: "POST",
                body: JSON.stringify({
                    domain: domain,
                    token
                }),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                cache: "no-cache"
            }
        )
        const {cookieId}: { cookieId: string } = await res.json()
        return cookieId
    }

}

export const userService = new UserService()
