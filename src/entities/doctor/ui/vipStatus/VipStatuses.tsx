"use client"

import { FC, MouseEvent } from "react";
import classes from './vipStatuses.module.scss'
import { BuySvg } from "../../lib/assets/BuySvg";
import { SellAdvertising } from "../../lib/assets/SellAdvertising";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Statuses = {
    canBuyAdvertising: boolean;
    canSellAdvertising: boolean;
    canBarter: boolean;
}

interface IProps {
    doctorVip: Statuses;
    miniature?: boolean; 
}

export const VipStatuses: FC<IProps> = ({doctorVip, miniature}) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const onApplyFilter = (filterKey: 'can_buy_advertising' | 'can_sell_advertising' | 'can_barter') => {
        return (e: MouseEvent<HTMLElement>) => {
            e.preventDefault()
            e.stopPropagation()

            const params = new URLSearchParams(pathname === '/' ? searchParams.toString() : '')
            params.set(filterKey, 'true')
            params.delete('page')
            router.push(`/?${params.toString()}`)
        }
    }


    return (
        <section className={classes.container + (miniature ? ` ${classes.miniature}` : '')}>
            {
                doctorVip.canBuyAdvertising
                    &&
                <section onClick={onApplyFilter('can_buy_advertising')} className={classes.badge + ' ' + classes.canBuyAdvertising}>
                   <BuySvg /> КУПЛЮ РЕКЛАМУ
                </section>    
            }
            {
                doctorVip.canSellAdvertising
                    &&
                <section onClick={onApplyFilter('can_sell_advertising')} className={classes.badge + ' ' + classes.canSellAdvertising}>
                   <SellAdvertising /> ПРОДАМ РЕКЛАМУ
                </section>    
            }
            {
                doctorVip.canBarter
                    &&
                <section onClick={onApplyFilter('can_barter')} className={classes.badge + ' ' + classes.canBarter}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3333 1.33301L14 3.99967M14 3.99967L11.3333 6.66634M14 3.99967H4.66667C3.95942 3.99967 3.28115 4.28063 2.78105 4.78072C2.28095 5.28082 2 5.9591 2 6.66634V7.33301M4.66667 14.6663L2 11.9997M2 11.9997L4.66667 9.33301M2 11.9997H11.3333C12.0406 11.9997 12.7189 11.7187 13.219 11.2186C13.719 10.7185 14 10.0403 14 9.33301V8.66634" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    БАРТЕР
                </section>    
            }
        </section>
    )
}
