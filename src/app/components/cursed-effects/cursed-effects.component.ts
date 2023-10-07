import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { pwd } from '../../interfaces/pwd';


@Component({
  selector: 'app-cursed-effects',
  templateUrl: './cursed-effects.component.html',
  styleUrls: ['./cursed-effects.component.css']
})
export class CursedEffectsComponent implements OnInit {

  pwd: pwd = { pwd: "" };

  constructor() { }

  ngOnInit(): void {
    
  }
}
