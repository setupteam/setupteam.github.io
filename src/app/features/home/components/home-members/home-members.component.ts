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
    const ms: Member[] = [
      {
        name: "Monster",
        avatarURL: "av-monster.jpeg",
        honorBadges: [
          { title:"Papá de Eros", bgColor: "#c9b783", textColor: "black" },
          { title:"Backend Developer", bgColor: "#9283c9", textColor: "white" },
        ],
        interests: [
          "Amante de la F1",
        ],
        history: [
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
        name: "Neinis",
        avatarURL: "avatar.png",
        interests: [
          "Lenguas",
          "Videojuegos"
        ],
        skills: [
          "Experto en Crash Team Racing",
          "Experto en Dragon Ball BT3",
          "Guitarra",
        ],
        motto: "Siempre Valito, nunca LOL",
        honorBadges: [
          { title: "Guitarrista de Nefelibata", bgColor: "#3f1515", textColor: "white" }
        ]
      },
      {
        name: "Mando",
        avatarURL: "avatar.png",
        history: [
          "Ex-platino que se rompió la rodilla y no pudo llegar a radiant",
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
        name: "Spirit",
        avatarURL: "avatar.png",
        interests: [
          "Valorant",
          "Super Smash Bros",
          "Programación",
        ],
        socialMedia: [
          { link: "https://afcr.dev/", name: "Portafolio: afcr.dev" }
        ]
      },
      {
        name: "LSinister",
        honorBadges: [
          { title: "Peligro al volante", bgColor: "#cca36e", textColor: "black" },
          { title: "Adulto responsable", bgColor: "#6ecc8a", textColor: "black" },
        ],
        avatarURL: "avatar.png",
        interests: [
          "Dark souls enjoyer",
        ],
        history: ["Jugador retirado de Valorant",],
      },
      {
        name: "Juanxe",
        avatarURL: "avatar.png",
        history: [
          "Miembro en Valorant 25"
        ]
      },
    ]; 

    this.members.push(...ms);
  }
}
