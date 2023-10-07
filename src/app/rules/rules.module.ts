import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesService } from './rules.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RulesRoutingModule
  ],
  providers: [RulesService]
})
export class RulesModule { }
