import { Component } from '@angular/core';
import { MemberCardComponent } from './member-card/member-card.component';
import { Member } from '../../../../core/entities/member';

@Component({
  selector: 'stdev-home-members',
  imports: [MemberCardComponent],
  templateUrl: './home-members.component.html',
  styleUrl: './home-members.component.scss'
})
export class HomeMembersComponent {
  members:Member[]= [];

  constructor(){
    this.members.push(...[
      {
        name: "Monster",
        avatarURL: "av-monster.jpeg",
        honorBadges: ["Papá de Eros",],
        interests: [
          "Amante de la F1",
          "Backend developer en mi tiempo libre",
        ],
        experiences: [
          "Ex jugador profesional de voleibol",
        ],
        skills: ["Main Raze",],
      },
      {
        name: "NoHandsSorry",
        avatarURL: "av-no-hands-sorry.png",
        interests: [
          "Fan de las skins mínima",
          "Fanático del ajedréz",
        ],
        motto: "Consagren sus corazones",
      },
      {
        name: "Mando",
        avatarURL: "avatar.png",
        experiences: [
          "Explatino que se rompió la rodilla y no pudo llegar a radiant",
        ],
      },
      {
        name: "Brago",
        avatarURL: "avatar.png",
        motto: `Mis capacidades son limitadas.
        Algunos me dicen ligeramente inferior a lo común.`,
      },
      {
        name: "Ming",
        avatarURL: "avatar.png",
        interests: ["Le gusta Valito",],
        skills: ["Sabe montar bicicleta",]
      },
      {
        name: "LSinister",
        honorBadges: ["Peligro al volante",],
        avatarURL: "avatar.png",
        interests: [
          "Dark souls enjoyer",
          "Adulto responsable",
        ],
        experiences: ["Jugador retirado de Valorant",],
      },
      {
        name: "Juanxe",
        avatarURL: "avatar.png",
      },
      {
        name: "Spirit",
        avatarURL: "avatar.png",
        interests: [
          "Valorant",
          "Super Smash Bros",
          "Programación",
        ],
      },
    ])
  }
}
