import { Member } from "../member";
import { Game, Map, Player, PlayerStats } from "./games";

export const Valorant:Game = {name: "Valorant"};

export enum VSeason{
    S25 = "T"
}

export interface VAct {
    season: VSeason,
    name: string
}

export const VActs = {
    S25_I: { season: VSeason.S25, name: "T25 AI" },
    S25_II: { season: VSeason.S25, name: "T25 AII" },
    S25_III: { season: VSeason.S25, name: "T25 AIII" },
} as const;

export enum ValorantMaps {
    ABYSS = "Abyss",
    ASCENT = "Ascent",
    BIND = "Bind",
    BREEZE = "Breeze",
    FRACTURE = "Fracture",
    HAVEN = "Haven",
    ICEBOX = "Icebox",
    LOTUS = "Lotus",
    PEARL = "Pearl",
    SPLIT = "Split",
    SUNSET = "Sunset",
}

export enum VRank{
    UNRANKED = "Sin posicionar",
    IRON_I = "Hierro I",
    IRON_II = "Hierro II",
    IRON_III = "Hierro III",
    BRONZE_I = "Bronce I",
    BRONZE_II = "Bronce II",
    BRONZE_III = "Bronce III",
    SILVER_I = "Plata I",
    SILVER_II = "Plata II",
    SILVER_III = "Plata III",
    GOLD_I = "Oro I",
    GOLD_II = "Oro II",
    GOLD_III = "Oro III",
    PLATINUM_I = "Platino I",
    PLATINUM_II = "Platino II",
    PLATINUM_III = "Platino III",
    DIAMOND_I = "Diamante I",
    DIAMOND_II = "Diamante II",
    DIAMOND_III = "Diamante III",
    ASCENDANT_I = "Acendente I",
    IMMORTAL_I = "Inmortal I",
    RADIANT = "Radiant",
}

export class ValorantPlayer implements Player {
    game = Valorant;
    stats: VPlayerStats[] = [];
    gamerTag!:string;
    member?:Member;
    rank:VRank;

    constructor(gamerTag:string, rank = VRank.UNRANKED){
        this.gamerTag = gamerTag;
        this.rank = rank;
    }

    averageStats(act:VAct):VPlayerStats {
        const stat:VPlayerStats = {
            ACS:0,aDDpR:0,aDR:0,assists:0,deaths:0,firstDeaths:0,
            firstKills:0,hPercentage:0,kast:0,kills:0,multiKills:0, act
        }

        let statCount = 0;

        this.stats.filter(stat => stat.act == act)
        .forEach(s => {
            stat.ACS+= s.ACS;
            stat.aDDpR+= s.aDDpR;
            stat.aDR+= s.aDR;
            stat.assists+= s.assists;
            stat.deaths+= s.deaths;
            stat.firstDeaths+= s.firstDeaths;
            stat.firstKills+= s.firstKills;
            stat.firstKills+= s.firstKills;
            stat.hPercentage+= s.hPercentage;
            stat.kast+= s.kast;
            stat.kills+= s.kills;
            stat.multiKills+= s.multiKills;

            statCount++;
        });

        stat.ACS/= statCount;
        stat.aDDpR/= statCount;
        stat.aDR/= statCount;
        stat.assists/= statCount;
        stat.deaths/= statCount;
        stat.firstDeaths/= statCount;
        stat.firstKills/= statCount;
        stat.firstKills/= statCount;
        stat.hPercentage/= statCount;
        stat.kast/= statCount;
        stat.kills/= statCount;
        stat.multiKills/= statCount;

        return stat
    }
}

export interface VPlayerStats extends PlayerStats {
    ACS:number;
    kills:number;
    deaths:number;
    assists:number;
    aDDpR:number;
    aDR:number;
    hPercentage:number;
    kast:number;
    firstKills:number;
    firstDeaths:number;
    multiKills:number;
    map?:ValorantMaps;
    isPlayoffs?:boolean;
    act:VAct
}