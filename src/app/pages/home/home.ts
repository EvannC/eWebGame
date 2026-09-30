import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameModeCard } from '../../shared/components/game-mode-card/game-mode-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, GameModeCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home {
  selectMode(mode: string) {
    console.log(mode);
  }

gameModes = [
  {
    title: 'Quiz',
    description: 'Réponds à des questions et sois le plus rapide !'
  },
  {
    title: 'Guess',
    description: 'Donne des indices pour faire deviner le mot à tes amis !'
  }
];

}

