

export interface IDoctorMiniatureResponse {
    data: IDoctorMiniature[];
    page: number;
    pages: number;
}

export interface IDoctorMiniature {
    avatar_url: string;
    city: string;
    doctor_url: string;
    inst_subs_count: string;
    inst_subs_count_text: string;
    inst_url: string | null;
    name: string;
    slug: string;
    speciality: string;
    tg_channel_url: string | null;
    tg_subs_count: string;
    tg_subs_count_text: string;
}