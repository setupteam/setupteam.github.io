import { Component, OnInit } from '@angular/core';
import { RulesService } from './rules.service';
import { IRule } from '../interfaces/Rule.model';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  rules!:IRule[]

  constructor(private rulesS:RulesService) {
    this.rulesS.list().subscribe(rules => this.rules = Object.entries(rules).map(r => r[1]))
  }

  ruleClick(event: Event){
    let el = event.target as Element;
    el.textContent += '  🥵';
  }

  ngOnInit(): void {
  }


}
