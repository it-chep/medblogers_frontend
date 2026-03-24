"use client"

import { FC, MouseEvent as MouseEventReact, TransitionEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ISwitchBannerItem } from "../../model/types";
import classes from './touchSwitchBanner.module.scss'
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";
import { SelectedElem } from "../selectedElem/SelectedElem";

interface IProps{
    banners: ISwitchBannerItem[];
}

export const TouchSwitchBanner: FC<IProps> = ({banners}) => {

    const refContainer = useRef<HTMLDivElement>(null)
    const [current, setCurrent] = useState<number>(0) 
    const isAnimatingRef = useRef(false);
    const [withoutAnimation, setWithoutAnimation] = useState(false);
    const [isReady, setIsReady] = useState<boolean>(false)
    const refAutoSwitching = useRef<NodeJS.Timeout>(null)

    const onPrev = () => {
        if(isAnimatingRef.current){
            return
        }
        isAnimatingRef.current = true;
        setCurrent(cur => cur - 1)
    }

    const onNext = () => {
        if(isAnimatingRef.current){
            return
        }
        isAnimatingRef.current = true;
        setCurrent(cur => cur + 1)
    }

    const onPointerDown = (e: MouseEventReact) => {
        const startX = e.clientX;
        const startY = e.clientY;

        const onPointerMove = (e: PointerEvent) => {
            e.preventDefault()
        }

        const onPointerUp = (e: PointerEvent) => {
            e.preventDefault()

            const endX = e.clientX;
            const endY = e.clientY;

            if(Math.abs(endX - startX) > 50){
                deleteAutoSwitching()
                autoSwitching()
                if(endX > startX){ // prev
                    onPrev()
                }
                else{ // next
                    onNext()
                }
            }

            
            document.removeEventListener('pointerup', onPointerUp)
            document.removeEventListener('pointermove', onPointerMove)
        }

        document.addEventListener('pointerup', onPointerUp)
        document.addEventListener('pointermove', onPointerMove)
    }

    const transitionEnd = (e: TransitionEvent) => {
        if (e.target !== e.currentTarget || e.propertyName !== "transform") {
            return;
        }
        
        if(current === -1) { // перекидываем без анимации на последний эл-нт
            setCurrent(banners.length - 1)
            setWithoutAnimation(true)
            isAnimatingRef.current = true;
        } else if(current === banners.length) { // перекидываем без анимации на первый эл-нт
            setCurrent(0)
            setWithoutAnimation(true)
            isAnimatingRef.current = true;
        } else{
            isAnimatingRef.current = false;
        }
    }   

    const autoSwitching = () =>  {
        const id = setInterval(() => {
            onNext()
        }, 5000)

        refAutoSwitching.current = id;
    }

    const deleteAutoSwitching = () => {
        if(refAutoSwitching.current){
            clearInterval(refAutoSwitching.current)
            refAutoSwitching.current = null;
        }
    }

    useEffect(() => {
        autoSwitching()

        return () => {
            deleteAutoSwitching()
        }
    }, [])

    useLayoutEffect(() => {
        if(!withoutAnimation){
            return
        }

        let ref2 = 0;
        const ref1 = requestAnimationFrame(() => {
            ref2 = requestAnimationFrame(() => {
                setWithoutAnimation(false)
                isAnimatingRef.current = false;
            })
        })

        return () => {
            cancelAnimationFrame(ref1)
            cancelAnimationFrame(ref2)
        }

    }, [withoutAnimation])

    const [canAnimate, setCanAnimate] = useState(false);

    useLayoutEffect(() => {
        if (!isReady) return;

        let raf2 = 0;
        const raf1 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
                setCanAnimate(true);
            });
        });

        return () => {
            cancelAnimationFrame(raf1);
            cancelAnimationFrame(raf2);
        };
    }, [isReady]);

    useEffect(() => {
        let cancelled = false;

        const urls = [...banners.map(b => b.url)]

        Promise.all(urls.map(url => 
            new Promise(resolve => {
                const img = new Image()
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve;
            })
        )).then(() => {
            if(!cancelled){
                setIsReady(true)
            }
        })

        return () => {
            cancelled = true; // после размонтированя then чтоб не запускался
        }
    }, [])

    return (
        isReady
            ?
        <>
            <section 
                ref={refContainer} 
                className={classes.container}
                onPointerDown={onPointerDown}
                onDragStart={e => e.preventDefault()}
                onDragEnd={e => e.preventDefault()}
                onTransitionEnd={transitionEnd}
                style={{
                    transform: `translateX(${-(current + 2) * 100}%)`,
                    transition: (!canAnimate || withoutAnimation) ? 'none' : 'all .8s ease'
                }}
            >
                <SelectedElem elem={banners[banners.length - 2]} />
                <SelectedElem elem={banners[banners.length - 1]} />
                {banners.map(banner => 
                    <SelectedElem elem={banner} />
                    
                )}
                <SelectedElem elem={banners[0]} />
                <SelectedElem elem={banners[1]} />
            </section>
            <section className={classes.nav}>
                {banners.map((item, ind) => 
                    <span 
                        key={item.url} 
                        className={classes.item + ((ind === current) || ((ind === (banners.length - 1)) && (current === -1)) || ((ind === 0) && (current === banners.length)) ? ` ${classes.selected}` : '')} 
                    />
                )}
            </section>
        </>
            :
        <section className={classes.loader}>
            <LoaderContainer />
        </section>
    )
}