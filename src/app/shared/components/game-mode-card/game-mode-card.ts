import { Component, input , output } from '@angular/core';


@Component({
  selector: 'app-game-mode-card',
  imports: [],
  templateUrl: './game-mode-card.html',
  styleUrl: './game-mode-card.scss',
})

export class GameModeCard {
  title = input.required<string>();
  description = input.required<string>();
  selected = output<string>();
}
