import { NewClubParticipantWidget } from '@/src/widgets/newClubParticipantWidget'
import classes from './newClubParticipantPage.module.scss'


export default function NewClubParticipantPage(){



    return (
        <main className={classes.wrapper}>
            <NewClubParticipantWidget />
        </main>
    )
}