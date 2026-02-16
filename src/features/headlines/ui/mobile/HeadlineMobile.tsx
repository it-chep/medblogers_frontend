import { FC, PointerEvent as PointerEventReact, useEffect, useRef, useState } from "react";
import classes from './mobile.module.scss'
import { List } from "../list/List";
import { createPortal } from "react-dom";

interface IProps {
    headlines: Element[];
    selectedHeadline: Element | null;
}

const LIST_HEIGHT = 500;

export const HeadlineMobile: FC<IProps> = ({headlines, selectedHeadline}) => {

    const [open, setOpen] = useState<boolean>(false)

    const refList = useRef<HTMLUListElement>(null)

    const onOpen = () => {
        setOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const onClose = () => {
        setOpen(false)
        document.body.style.overflow = ''
    }

    useEffect(() => {
        return () => {
            setOpen(false)
            document.body.style.overflow = ''
        }
    }, [])

    const onStart = (e: PointerEventReact) => {
        if(refList.current) {
            e.preventDefault()
            
            const topList = e.clientY - refList.current.getBoundingClientRect().top;
            let prevTopList = topList;

            const onPointerMove = (e: PointerEvent) => {
                e.preventDefault()
                if(refList.current) {
                    const newTopList = e.clientY - topList;
                    refList.current.style.transition = 'all .1s ease'
                    const calcTop = - LIST_HEIGHT - newTopList > -window.innerHeight ? window.innerHeight - LIST_HEIGHT : newTopList
                    setTimeout(() => {prevTopList = calcTop}, 30)
                    const newBottom = `calc(100vh - ${LIST_HEIGHT}px - ${calcTop}px)`;
                    refList.current.style.bottom = newBottom;
                }
            }

            const onPointerUp = (e: PointerEvent) => {
                e.preventDefault()
                if(refList.current) {
                    const newTopList = e.clientY - topList;
                    refList.current.style.transition = 'all .5s ease-out'
                    const calcTop = - LIST_HEIGHT - newTopList > -window.innerHeight ? window.innerHeight - LIST_HEIGHT : newTopList

                    if(prevTopList > calcTop){  // open
                        refList.current.style.bottom = '';
                        onOpen()
                    }
                    else{
                        refList.current.style.bottom = '';
                        onClose()
                    }
                    
                    window.removeEventListener('pointermove', onPointerMove)
                    window.removeEventListener('pointerup', onPointerUp)
                }
            }

            window.addEventListener('pointermove', onPointerMove)
            window.addEventListener('pointerup', onPointerUp)
        }
    }

    return (
        <section>
            <ul onClick={onOpen} className={classes.slider}>
                {headlines.map(headline => 
                    <li 
                        key={headline.textContent}
                        className={classes.item + (selectedHeadline === headline ? ` ${classes.selected}` : '')} 
                    />
                )}
            </ul>
            <section 
                className={classes.listWrap + (open ? ` ${classes.open}` : '')}
                ref={refList}
            >
                <section 
                    className={classes.dragClose} 
                    onPointerDown={onStart}
                    onDragStart={e => e.preventDefault()}
                    onDragLeave={e => e.preventDefault()}
                />
                <section className={classes.list}>
                    <List 
                        headlines={headlines}
                        selectedHeadline={selectedHeadline}
                        setOpen={onClose}
                    />
                </section>
            </section>
            {
                open
                    &&
                createPortal(
                    <section onClick={onClose} className={classes.darken} />,
                    document.body
                )
            }
        </section>
    )
}