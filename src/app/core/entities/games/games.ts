export interface Game {readonly name: string}

export interface Player{
    readonly gamerTag:string;
    readonly game:Game;
    readonly stats: PlayerStats[];
}

export interface PlayerStats{}
export interface Map {readonly name:string}