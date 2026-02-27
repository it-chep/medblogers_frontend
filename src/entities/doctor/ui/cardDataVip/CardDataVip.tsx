import { FC } from "react";
import classes from './cardData.module.scss'
import { IDoctor, IDoctorVip } from "../../model/types";
import { VipStatuses } from "../vipStatus/VipStatuses";
import { Quote } from "../quote/Quote";
import { VipRub } from "../../lib/assets/VipRub";

interface IProps {
    doctor: IDoctor;
    doctorVip: IDoctorVip | null;
}

export const CardDataVip: FC<IProps> = ({doctor, doctorVip}) => {

    return (
        <section className={classes.container}>
            <h1 className={classes.name}>
                {doctor.name}
            </h1>
            {
                doctorVip?.shortMessage
                    &&
                <section className={classes.shortMessage}>
                    <Quote 
                        text={doctorVip.shortMessage}
                        turquoise
                    />
                </section>
            }
            {
                doctorVip && (doctorVip.canBuyAdvertising || doctorVip.canSellAdvertising || doctorVip.canBarter)
                    &&
                <section className={classes.statuses}>
                    <VipStatuses doctorVip={doctorVip} />
                </section>
            }
            {
                doctorVip?.advertisingPriceFrom
                    &&
                <section className={classes.advertisingPriceFromWrap}>
                    <VipRub />
                    <section className={classes.advertisingPriceFrom}>
                        <section className={classes.sign}>
                            Стоимость рекламы:
                        </section>
                        от {doctorVip.advertisingPriceFrom} рублей
                    </section>
                </section>
            }
            <section className={classes.blogTheme + (doctorVip ? ` ${classes.vip}` : '')}>
                <section className={classes.sign}>
                    Информация о блоге
                </section> 
                <section className={classes.theme}>
                    <span className={classes.themeSign}>Тематика: </span>{doctor.mainBlogTheme}
                </section>
            </section>
            {
                doctorVip?.blogInfo
                    &&
                <>
                    <section className={classes.blogInfo}>
                        <Quote 
                            text={doctorVip.blogInfo}
                            turquoise
                        />
                    </section>
                </>
            }
        </section>
    )
}