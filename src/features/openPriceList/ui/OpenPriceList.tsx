"use client"

import { FC, useEffect, useRef, useState } from "react";
import classes from './openPriceList.module.scss'
import { IFreelancer, PriceListWrap } from "@/src/entities/freelancer";
import { MyButton } from "@/src/shared/ui/myButton";

interface IProps {
    priceList: IFreelancer['priceList'];
    heightConst: number;
    darkenHeightConst: number;
    priceCategory: string;
}

export const OpenPriceList: FC<IProps> = ({priceList, heightConst, darkenHeightConst, priceCategory}) => {

    const use = priceList.length > 8;

    const [open, setOpen] = useState<boolean>(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const darkenRef = useRef<HTMLDivElement>(null)

    const additionalPercentage = 0.2;

    const speed = (priceList.length + (priceList.length * additionalPercentage)) / 30;

    const onClick = () => {
        const newOpen = !open;
        if(contentRef.current && darkenRef.current){
            if(newOpen){
                const height = contentRef.current.scrollHeight;
                contentRef.current.style.height = height + 5 + 'px';
                darkenRef.current.style.height = '0px';
                darkenRef.current.style.opacity = '0';
            }
            else{  
                contentRef.current.style.height = heightConst + 'px';
                darkenRef.current.style.height = darkenHeightConst + 'px';
                darkenRef.current.style.opacity = '1';
            }
            setOpen(newOpen)
        }
    }

    

    return (
        <section className={classes.openPriceList}>
            {
                use 
                    ?
                <>
                    <section 
                        className={classes.content}
                        ref={contentRef} 
                        style={{height: heightConst + 'px', transition: `all ${speed}s ease`}} 
                    >
                        <PriceListWrap priceCategory={priceCategory} priceList={priceList} />
                        <section 
                            className={classes.darken}
                            ref={darkenRef} 
                            style={{height: darkenHeightConst + 'px', transition: `all ${speed}s ease`}} 
                        />
                    </section>
                    <section className={classes.button}>
                        <MyButton onClick={onClick}>
                            {!open ? 'Посмотреть все' : 'Спрятать' }
                        </MyButton>
                    </section>
                </>             
                    :
                <PriceListWrap priceCategory={priceCategory} priceList={priceList} />
            }
        </section>
    )
}