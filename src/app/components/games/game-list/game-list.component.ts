import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Game } from '../../../models/game.model';
import { GameThumbnailComponent } from '../game-thumbnail/game-thumbnail.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameThumbnailComponent],
  templateUrl: './game-list.component.html',
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
