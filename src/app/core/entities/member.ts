export interface Member {
    name:string;
    avatarURL:string;
    honorBadges?: Badge[];
    interests?: string[];
    skills?: string[];
    history?: string[];
    motto?: string;
    socialMedia?: SocialMedia[]
}

export interface SocialMedia{
    link: string,
    name: string;
}

export interface Badge{
    textColor:string;
    bgColor: string;
    title: string;
}