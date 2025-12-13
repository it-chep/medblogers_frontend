import { FC } from "react";
import classes from './shareBlog.module.scss'
import { MyButtonBlog } from "../button/MyButton";



export const ShareBlog: FC = () => {

    return (
        <MyButtonBlog>
            <section className={classes.share}>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1V12.05M9 1L13 4.4M9 1L5 4.4M1 9.5V16.3C1 16.7509 1.21071 17.1833 1.58579 17.5021C1.96086 17.8209 2.46957 18 3 18H15C15.5304 18 16.0391 17.8209 16.4142 17.5021C16.7893 17.1833 17 16.7509 17 16.3V9.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Поделиться
            </section>
        </MyButtonBlog>
    )
}