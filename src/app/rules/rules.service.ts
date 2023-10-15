import { Injectable } from '@angular/core';

import { IRule } from '../interfaces/Rule.model';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RulesService extends ApiService<IRule> {
  override url = `${this.apiEndpoint}rules`;
}
