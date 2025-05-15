import { AfterContentInit, Component, Input } from '@angular/core';
import { VAct, VActs, ValorantPlayer, VPlayerStats } from '../../../../../core/entities/games';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'stdev-vplayer-card',
  imports: [DecimalPipe],
  templateUrl: './valorant-player-card.component.html',
  styleUrl: './valorant-player-card.component.scss'
})
export class ValorantPlayerCardComponent implements AfterContentInit {
  @Input()
  player!:ValorantPlayer;

  currentAct:VAct = VActs.S25_II;

  currentAverageStats!:VPlayerStats

  constructor(){
  }

  ngAfterContentInit(): void {
    this.currentAverageStats = this.player.averageStats(this.currentAct);
  }
}
