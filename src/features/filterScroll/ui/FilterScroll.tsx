"use client"

import { CSSProperties, FC, HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from "react";
import classes from './filterScroll.module.scss'

type TVisibleSection = {
    start: boolean;
    end: boolean;
    f_start: boolean;
    f_end: boolean;
}

const visibleSectionInit = {
    start: false,
    end: false,
    f_start: false,
    f_end: false,
}

export const FilterScroll: FC<PropsWithChildren> = ({children}) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);
    const startRef = useRef<HTMLDivElement>(null)
    const endRef = useRef<HTMLDivElement>(null)
    const f_startRef = useRef<HTMLDivElement>(null)
    const f_endRef = useRef<HTMLDivElement>(null)
    const filterWrapRef = useRef<HTMLDivElement>(null)
  
    const [position, setPosition] = useState<'top' | 'end' | 'relative' | 'bottom'>('relative');
    const positionRef = useRef<'top' | 'end' | 'relative' | 'bottom'>('relative');
    const useScroll = useRef<boolean>(true);
    const [visibleSection, setVisibleSection] = useState<TVisibleSection>(visibleSectionInit)
    const [style, setStyle] = useState<CSSProperties>({})



    const isElementVisible = (element: HTMLElement | null): boolean => {
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        
        // Проверяем, находится ли элемент в области видимости
        return (
            rect.top < windowHeight && 
            rect.bottom > 0 &&
            rect.left < windowWidth && 
            rect.right > 0
        );
    };

    useEffect(() => {
        positionRef.current = position;
    }, [position])

    useEffect(() => {

        const setFilterBottom = (
            bottomTriggerBottom: number, filterWrapRect: DOMRect, end: DOMRect, filterRect: DOMRect, start: DOMRect
        ) => {
            if(bottomTriggerBottom <= (filterWrapRect.bottom + 50)){
                setStyle({position: 'relative', top: end.top - filterRect.height - start.top - 70 + 'px', bottom: 'auto'})
                setPosition('bottom')
            }
        } 

        if(filterRef.current){

            let idInterval: NodeJS.Timeout | null = null;
            let idTimeout: NodeJS.Timeout | null = null
            let prevHeight = filterRef.current.getBoundingClientRect().height;

            const changeFilterHandle = () => {
                if (!filterWrapRef.current || !filterRef.current || !startRef.current || !endRef.current) {
                    return;
                }
                const filterWrapRect = filterWrapRef.current.getBoundingClientRect();
                const filterRect = filterRef.current.getBoundingClientRect();
                const start = startRef.current.getBoundingClientRect();
                const end = endRef.current.getBoundingClientRect();
                const bottomTriggerBottom = end.bottom;
                setFilterBottom(bottomTriggerBottom, filterWrapRect, end, filterRect, start)
            }

            const fn = (entries: MutationRecord[]) => {
                entries.map(entrie => {
                    if(entrie.target.nodeName === 'SECTION'){
                        const target = entrie.target as Element
                        if(target.closest('.open_filter')){
                            if (!filterWrapRef.current || !filterRef.current || !startRef.current || !endRef.current) {
                                return;
                            }

                            const newHeight = filterRef.current.getBoundingClientRect().height
                            
                            if(idInterval && idTimeout){
                                clearInterval(idInterval)
                                clearTimeout(idTimeout)
                            }

                            if(positionRef.current === 'bottom'){
                                changeFilterHandle()
                                idInterval = setInterval(changeFilterHandle)
                            }
                            else if ((positionRef.current === 'end') && (target.closest('.open'))){ 
                                // если закреплен снизу, то при открытии фильтра, будет вверх открываться: убираем fixed и будет открываться вниз,
                                // но проблема появляется в самом низу, надо подумать
                                const filterRect = filterRef.current.getBoundingClientRect();
                                const start = startRef.current.getBoundingClientRect();
                                setStyle({position: 'relative', top: - filterRect.height + filterRect.bottom - start.top - 22 + 'px', bottom: 'auto'})
                                setPosition('relative')
                                prevHeight = newHeight
                                return
                            } else {
                                useScroll.current = false;
                                calculatePosition()
                                idInterval = setInterval(calculatePosition)
                            }
                            idTimeout = setTimeout(() => {
                                if(idInterval && idTimeout){
                                    clearInterval(idInterval)
                                    clearTimeout(idTimeout)
                                    useScroll.current = true;
                                }
                            }, 300)
                            prevHeight = newHeight
                        }
                    }
                })
            }

            const observer = new MutationObserver(fn)
            observer.observe(filterRef.current, {
                childList: true, // наблюдать за непосредственными детьми
                subtree: true, // и более глубокими потомками
                attributes: true,
                attributeFilter: ['class']
            })

        }

        let prevScroll = 0;

        const calculatePosition = () => {
            if (!filterWrapRef.current || !filterRef.current || !startRef.current || !endRef.current || !f_startRef.current || !f_endRef.current) {
                return;
            }

            const newScroll = window.scrollY;

            const filterWrapRect = filterWrapRef.current.getBoundingClientRect();
            const filterRect = filterRef.current.getBoundingClientRect();
            const start = startRef.current.getBoundingClientRect();
            const f_start = f_startRef.current.getBoundingClientRect();
            const end = endRef.current.getBoundingClientRect();
            const f_end = f_endRef.current.getBoundingClientRect();

            const viewportHeight = window.innerHeight;
                
            const topTriggerTop = start.top;
            const bottomTriggerBottom = end.bottom;
                
            if(((bottomTriggerBottom < filterWrapRect.bottom + 40)) || (bottomTriggerBottom < 0)){
                setFilterBottom(bottomTriggerBottom, filterWrapRect, end, filterRect, start)
            }
            else if ((topTriggerTop < 0)) {
                if((newScroll < prevScroll) && ((positionRef.current === 'relative') || (positionRef.current === 'bottom')) && (isElementVisible(f_startRef.current) && f_start.top >= 20)){
                    setPosition('top');
                    setStyle({position: 'fixed', top: '20px'})
                }
                else if(positionRef.current !== 'bottom'){
                    if((isElementVisible(f_startRef.current) && isElementVisible(f_endRef.current) && (filterRect.height < viewportHeight - 40)) || (
                        (f_start.top < 20) && isElementVisible(f_endRef.current) && (positionRef.current === 'relative') && (filterRect.height < viewportHeight - 40)) || (
                        (!isElementVisible(f_startRef.current) && !isElementVisible(f_endRef.current) && (filterRect.height < viewportHeight - 40))
                    )){
                        setStyle({position: 'fixed', top: '20px'})
                        setPosition('top')
                    }
                    else if((f_end.bottom < (viewportHeight - 20)) && (useScroll.current ? newScroll > prevScroll : true) && (filterRect.height > viewportHeight - 40)){
                            setStyle({position: 'fixed', top: 'auto', bottom: '20px'})
                            setPosition('end')
                        }
                        else if((positionRef.current === 'end') && (newScroll < prevScroll)){
                            setStyle({position: 'relative', top: - filterRect.height + filterRect.bottom - start.top - 20 + 'px', bottom: 'auto'})
                            setPosition('relative')
                        }
                        else if ((viewportHeight - f_end.bottom < 19) && (newScroll > prevScroll) && (positionRef.current !== 'relative')){
                            setStyle({position: 'relative', top: - start.top  + 'px', bottom: 'auto'})
                            setPosition('relative')
                        }
                }
            } else {
                setPosition('relative');
                setStyle({position: 'relative', top: '0px'})
            }
            prevScroll = newScroll;
        };

        // Используем requestAnimationFrame для плавности
        let rafId: number;
        const handleScroll = () => {
            useScroll.current = true;
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(calculatePosition);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll, { passive: true });
                
        // Первоначальный расчет
        calculatePosition();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section ref={containerRef} className={classes.container}>
            <section ref={startRef} className={classes.start} />
            <section 
                ref={filterWrapRef} 
                className={classes.filterWrap}
                style={style}
            >
                <section ref={f_startRef} className={classes.f_start} />
                <section 
                    className={classes.filter}
                    ref={filterRef}
                >
                    {children}
                </section>
                <section ref={f_endRef} className={classes.f_end} />
            </section>
            <section ref={endRef} className={classes.end} />
        </section>
    );
};