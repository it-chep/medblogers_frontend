import { SERVER_URL_API } from "@/src/app/env/env"



class BlacklistService {

    async check(telegram: string){
        const res = await fetch(SERVER_URL_API + '/v1/blacklist_check', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(telegram),
            cache: "no-cache"
        })
        const {is_in_blacklist}: {is_in_blacklist: boolean} = await res.json()
        return is_in_blacklist
    }

}

export const blacklistService = new BlacklistService()