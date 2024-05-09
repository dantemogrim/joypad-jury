import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Game } from '../../models/game.model';
import { GameThumbnailComponent } from '../game-thumbnail/game-thumbnail.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameThumbnailComponent],
  template: `<div class="flex flex-col items-start">
    <h2 class="font-neue text-4xl pb-3">Game List</h2>
    <ul *ngFor="let game of games">
      <li>{{ game.name }}</li>
    </ul>
    <app-game-thumbnail></app-game-thumbnail>
    <button class="p-1 border rounded-md my-4">New Game</button>
  </div> `,
})
export class GameListComponent {
  games: Game[] = [
    new Game(
      'Hollow Knight',
      'Difficult but rewarding.',
      'https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp'
    ),
  ];
}
