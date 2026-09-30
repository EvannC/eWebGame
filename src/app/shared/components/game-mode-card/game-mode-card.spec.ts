import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModeCard } from './game-mode-card';

describe('GameModeCard', () => {
  let component: GameModeCard;
  let fixture: ComponentFixture<GameModeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameModeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(GameModeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
