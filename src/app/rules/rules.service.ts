import { Injectable } from '@angular/core';

import { IRule } from '../interfaces/Rule.model';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor() { }

  get():IRule[]{
    return [
      {
        id: 1,
        text: 'Explicar si va a burlarse'
      },
      {
        id: 2,
        text: 'Referenciar con frases de Valorant'
      },
      {
        id: 3,
        text: 'No escribir/decir falacias'
      },
      {
        id: 4,
        text: 'Invitar a jugar'
      },
      {
        id: 5,
        text: 'No ser tan técnicos, lapvtamadre'
      },
      {
        id: 6,
        text: 'Solo discusiones con insultos'
      },
      {
        id: 7,
        text: 'Decir quién les preguntó algo'
      },
      {
        id: 8,
        text: 'Poner ST en el username de riot o hacer referecia en el tag y no ocultarlo al mundo'
      },
      {
        id: 9,
        text: 'No contradecir a los que tienen rangos superiores en Valorant a menos que sea Platita'
      },
      {
        id: 10,
        text: 'No hacer descargar && comprar un juego si no lo van a jugar'
      },
      {
        id: 11,
        text: 'No burlarse de los miserables que son bronce en Valorant'
      },
      {
        id: 12,
        text: 'La imagen del grupo debe ser creada por un ST o por la IA usada por un ST'
      },{
        id: 13,
        text: 'Nunca confíen en alguien que tiene la palabra "gonorrea" en su nombre'
      },
      {
        id: 14,
        text: 'Hacer caso al nombre del grupo'
      },
    ]
  }
}
