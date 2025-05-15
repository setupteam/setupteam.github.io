import { Component } from '@angular/core';
import { VActs, ValorantMaps, ValorantPlayer, VPlayerStats, VRank } from '../../../../core/entities/games';
import { ValorantPlayerCardComponent } from './valorant-player-card/valorant-player-card.component';

@Component({
  selector: 'stdev-valorant',
  imports: [ValorantPlayerCardComponent],
  templateUrl: './valorant.component.html',
  styleUrl: './valorant.component.scss'
})
export class ValorantComponent {
  players:ValorantPlayer[] = [];

  constructor(){
    this.players.push(...[
      this.createPlayer("Spirit", VRank.PLATINUM_I, [
        {
          ACS: 323,
          kills: 23,
          deaths: 13,
          assists: 6,
          aDDpR: 75,
          aDR: 204.0,
          hPercentage: 10,
          kast: 79,
          firstKills: 3,
          firstDeaths: 0,
          multiKills: 2,
          map: ValorantMaps.LOTUS,
          act: VActs.S25_II,
        },
        {
          ACS: 279,
          kills: 21,
          deaths: 10,
          assists: 4,
          aDDpR: 65,
          aDR: 181.4,
          hPercentage: 9,
          kast: 95,
          firstKills: 3,
          firstDeaths: 1,
          multiKills: 1,
          map: ValorantMaps.SPLIT,
          act: VActs.S25_II,
        },
        {
          ACS: 278,
          kills: 18,
          deaths: 16,
          assists: 9,
          aDDpR: 66,
          aDR: 193.7,
          hPercentage: 12,
          kast: 74,
          firstKills: 4,
          firstDeaths: 0,
          multiKills: 0,
          map: ValorantMaps.ASCENT,
          act: VActs.S25_II,
        },
        {
          ACS: 183,
          kills: 16,
          deaths: 19,
          assists: 2,
          aDDpR: 44,
          aDR: 126.7,
          hPercentage: 14,
          kast: 71,
          firstKills: 2,
          firstDeaths: 0,
          multiKills: 2,
          map: ValorantMaps.ASCENT,
          act: VActs.S25_II,
        },
        {
          ACS: 174,
          kills: 9,
          deaths: 7,
          assists: 4,
          aDDpR: 55,
          aDR: 135.7,
          hPercentage: 15,
          kast: 82,
          firstKills: 1,
          firstDeaths: 0,
          multiKills: 1,
          map: ValorantMaps.ICEBOX,
          act: VActs.S25_II,
        },
        {
          ACS: 178,
          kills: 11,
          deaths: 7,
          assists: 4,
          aDDpR: 45,
          aDR: 110.5,
          hPercentage: 16,
          kast: 89,
          firstKills: 2,
          firstDeaths: 0,
          multiKills: 0,
          map: ValorantMaps.ICEBOX,
          act: VActs.S25_II,
        },
        {
          ACS: 190,
          kills: 14,
          deaths: 15,
          assists: 4,
          aDDpR: -6,
          aDR: 131.0,
          hPercentage: 7,
          kast: 74,
          firstKills: 1,
          firstDeaths: 4,
          multiKills: 1,
          map: ValorantMaps.ASCENT,
          isPlayoffs: true,
          act: VActs.S25_II,
        },
        {
          ACS: 150,
          kills: 9,
          deaths: 9,
          assists: 5,
          aDDpR: -10,
          aDR: 94.2,
          hPercentage: 11,
          kast: 76,
          firstKills: 1,
          firstDeaths: 2,
          multiKills: 0,
          map: ValorantMaps.SPLIT,
          isPlayoffs: true,
          act: VActs.S25_II,
        },
        {
          ACS: 171,
          kills: 12,
          deaths: 15,
          assists: 3,
          aDDpR: -1,
          aDR: 113.3,
          hPercentage: 9,
          kast: 77,
          firstKills: 0,
          firstDeaths: 1,
          multiKills: 0,
          map: ValorantMaps.SPLIT,
          isPlayoffs: true,
          act: VActs.S25_II,
        },
      ])
    ])
  }

  createPlayer(gamerTag:string, rank:VRank, stats:VPlayerStats[]){
    const player = new ValorantPlayer (gamerTag, rank);
    player.stats.push(...stats);
    return player;
  }
}
