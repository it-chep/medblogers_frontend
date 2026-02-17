import { FC, PointerEvent as PointerEventReact, useEffect, useRef, useState } from "react";
import classes from './mobile.module.scss'
import { List } from "../list/List";
import { createPortal } from "react-dom";

interface IProps {
    headlines: Element[];
    selectedHeadline: Element | null;
}

const SPEED_DRAG = 'all .1s ease';
const SPEED_OPEN_CLOSE = 'all .4s ease-out';

export const HeadlineMobile: FC<IProps> = ({headlines, selectedHeadline}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [opacity, setOpacity] = useState<1 | 0>(0)
    const [listHeight, setListHeight] = useState<number>(0)
    const refList = useRef<HTMLUListElement>(null)
    const refListHeight = useRef<number>(0)

    useEffect(() => {
        refListHeight.current = listHeight;
    }, [listHeight])

    const onOpen = () => {
        setOpen(true)
        if(refList.current){
            refList.current.style.bottom = `0px`;
        }
        document.body.style.overflow = 'hidden'
    }

    const onClose = () => {
        setOpen(false)
        if(refList.current){
            refList.current.style.bottom = `-${refListHeight.current}px`;
        }
        document.body.style.overflow = ''
    }

    const onStart = (e: PointerEventReact) => {
        if(refList.current) {
            e.preventDefault()
            
            const bottomShiftList = refList.current.getBoundingClientRect().height - (window.innerHeight - e.clientY);
            let prevBottomList = bottomShiftList;

            refList.current.style.transition = SPEED_DRAG;

            const onPointerMove = (e: PointerEvent) => {
                e.preventDefault()
                if(refList.current) {
                    const clientBottom = window.innerHeight - e.clientY;
                    const newBottomList = listHeight - clientBottom - bottomShiftList;
                    setTimeout(() => {prevBottomList = newBottomList}, 30)
                    const newBottom = `-${newBottomList}px`;
                    refList.current.style.bottom = newBottom;
                }
            }

            const onPointerUp = (e: PointerEvent) => {
                e.preventDefault()
                if(refList.current) {
                    const clientBottom = window.innerHeight - e.clientY;
                    const newBottomList = listHeight - clientBottom - bottomShiftList;
                    refList.current.style.transition = SPEED_OPEN_CLOSE;
                    if(prevBottomList >= newBottomList){  // open
                        onOpen()
                    }
                    else{
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

    useEffect(() => {
        if(refList.current){
            const height = refList.current.getBoundingClientRect().height;
            refList.current.style.transition = SPEED_OPEN_CLOSE;
            refList.current.style.bottom = `-${height}px`;
            setListHeight(height)
            setOpacity(1)
        }
        return () => {
            setOpen(false)
            document.body.style.overflow = ''
        }
    }, [])

    useEffect(() => {
        const onResize = () => {
            if(refList.current){
                const height = refList.current.getBoundingClientRect().height;
                setListHeight(height)
            }
        }

        window.addEventListener('resize', onResize)

        return () => {
            onResize()
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <section 
            style={{opacity}}
        >
            <ul onClick={onOpen} className={classes.slider}>
                {headlines.map(headline => 
                    <li 
                        key={headline.textContent}
                        className={classes.item + (selectedHeadline === headline ? ` ${classes.selected}` : '')} 
                    />
                )}
            </ul>
            <section 
                className={classes.listWrap}
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