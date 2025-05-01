import { Component, Input } from '@angular/core';
import { Member } from '../../../../../core/entities/member';

@Component({
  selector: 'stdev-member-card',
  imports: [],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss'
})
export class MemberCardComponent {
  @Input()
  member!:Member;
}
