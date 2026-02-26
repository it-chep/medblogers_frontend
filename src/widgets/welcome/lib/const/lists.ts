import React from "react";
import { PillSvg } from "../assets/PillSvg";
import { MessageCircle } from "../assets/MessageCircle";
import { UserLock } from "../assets/UserLock";
import { ShieldUser } from "../assets/ShieldUser";
import { Heart } from "../assets/Heart";
import { Lock } from "../assets/Lock";
import { ClipboardX } from "../assets/ClipboardX";
import { Users } from "../assets/Users";
import { MousePointer } from "../assets/MousePointer";
import { Camera } from "../assets/Camera";
import { FileText } from "../assets/FileText";
import { calendarCheck } from "../assets/CalendarCheck";

type TItem = {
    text: string;
    icon: React.FC;
    width: number;
}

export const requirements: TItem[] = [
    {
        text: 'Минимум 100 подписчиков (или наличие поста-знакомства)',
        icon: Users,
        width: 390,
    },
    {
        text: 'Готовность разместить личный Telegram-аккаунт',
        icon: MousePointer,
        width: 326,
    },
    {
        text: 'Своя фотография на аватарке профиля',
        icon: Camera,
        width: 382,
    },
    {
        text: 'Указаны ФИО, специальность и город',
        icon: FileText,
        width: 390,
    },
    {
        text: 'Последняя публикация не старше 1 года',
        icon: calendarCheck,
        width: 326,
    },
]

export const noposts: TItem[] = [
    {
        text: 'Фитотерапевты, антипрививочники, гирудотерапевты, гомеопаты',
        icon: PillSvg,
        width: 353,
    },
    {
        text: 'Доктора с БАДами, витаминными капельницами и альтернативной медициной',
        icon: MessageCircle,
        width: 417,
    },
    {
        text: 'Косметологи без высшего медицинского образования',
        icon: UserLock,
        width: 328,
    },
    {
        text: 'Специалисты, выдающие себя за других специалистов',
        icon: ShieldUser,
        width: 324,
    },
    {
        text: 'Блоги с накрутками подписчиков и лайков',
        icon: Heart,
        width: 262,
    },
    {
        text: 'Закрытые страницы и Telegram-аккаунты',
        icon: Lock,
        width: 248,
    },
    {
        text: 'Нарушители правил readydoc',
        icon: ClipboardX,
        width: 244
    }
]