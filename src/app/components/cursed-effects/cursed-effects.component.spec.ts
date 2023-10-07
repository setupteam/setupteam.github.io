import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursedEffectsComponent } from './cursed-effects.component';

describe('CursedEffectsComponent', () => {
  let component: CursedEffectsComponent;
  let fixture: ComponentFixture<CursedEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursedEffectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursedEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
