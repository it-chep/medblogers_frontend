"use client"

import { FC, PropsWithChildren } from "react";


interface IProps {

}

export const Share: FC<IProps & PropsWithChildren> = ({children}) => {

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    text: 'Посмотрите эту страницу!',
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Поделиться отменено');
            }
        } 
    };

    return (
        <section onClick={handleShare}>
            {children}
        </section>
    )
}