import { FC, PropsWithChildren, useEffect, useState } from "react";
import classes from './mobile.module.scss'
import { List } from "../list/List";
import { createPortal } from "react-dom";
import { Curtain } from "@/src/shared/ui/curtain";

interface IProps {
    headlines: Element[];
    selectedHeadline: Element | null;
}

export const HeadlineMobile: FC<IProps & PropsWithChildren> = ({headlines, selectedHeadline, children}) => {

    const [open, setOpen] = useState<boolean>(false)

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
            document.body.style.overflow = ''
        }

    }, [])

    return (
        <>
            <section className={classes.bottom}>
                {children}
                <ul onClick={onOpen} className={classes.slider} style={{color: `var(--blue)`}}>
                    {headlines.map(headline => 
                        <li 
                            key={headline.textContent}
                            className={classes.item + (selectedHeadline === headline ? ` ${classes.selected}` : '')} 
                        />
                    )}
                </ul>
            </section>
            <Curtain 
                onCloseWrap={onClose}
                openWrap={open}
                initClose
                backgroundColor="var(--light-black)"
            >
                <section className={classes.listWrap}> 
                    <List 
                        headlines={headlines}
                        selectedHeadline={selectedHeadline}
                        setOpen={onClose}
                    />
                </section>
            </Curtain>
            {
                open
                    &&
                createPortal(
                    <section onClick={onClose} className={classes.darken} />,
                    document.body
                )
            }
        </>
    )
}