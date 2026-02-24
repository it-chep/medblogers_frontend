import { SERVER_URL_API } from "@/src/app/env/env"



class BlacklistService {

    async check(telegram: string){
        const res = await fetch(SERVER_URL_API + '/v1/blacklist_check', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"telegram": telegram}),
            cache: "no-cache"
        })
        const {isInBlacklist}: {isInBlacklist: boolean} = await res.json()
        return isInBlacklist
    }

    async getCount(){
        const res = await fetch(SERVER_URL_API + '/v1/blacklist_count', {
            cache: "no-cache"
        })
        const {cheatersCount}: {cheatersCount: number} = await res.json()
        return cheatersCount
    }
}

export const blacklistService = new BlacklistService()