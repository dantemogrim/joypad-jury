import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

import { Game } from '../../models/game.model';
import { GameThumbnailComponent } from '../game-thumbnail/game-thumbnail.component';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameThumbnailComponent, HttpClientModule],
  template: `<div class="flex flex-col items-start">
    <h2 class="font-neue text-4xl pb-3">My Rated Games</h2>
    <ul *ngFor="let game of games">
      <li>{{ game.name }}</li>
    </ul>
    <app-game-thumbnail></app-game-thumbnail>
    <button class="p-1 border rounded-md my-4">Add New</button>
  </div> `,
})
export class GameListComponent implements OnInit {
  games: any = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.index().subscribe((res) => {
      this.games = res;
    });
  }
}
