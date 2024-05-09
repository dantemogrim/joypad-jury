import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet, RouterLink } from '@angular/router';

import { GameThumbnailComponent } from '../game-thumbnail/game-thumbnail.component';
import { GameService } from '../../services/game.service';

//<app-game-thumbnail></app-game-thumbnail>
@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    CommonModule,
    GameThumbnailComponent,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
  ],
  template: `
    <h2 class="font-neue text-3xl md:text-4xl pb-3">My Rated Games</h2>
    <ul class="flex flex-col gap-10 items-center justify-center w-full">
      <li
        class="grid items-center grid-rows-2 grid-cols-2 gap-2 border w-full max-h-25 p-4 rounded-md"
        *ngFor="let game of games"
      >
        <a
          routerLink="/info/{{ game.id }}"
          class="text-lg row-start-1 row-end-1 col-start-1 col-end-1 text-green-100"
          >{{ game.name }}</a
        >
        <p class="row-start-2 row-end-2 col-start-1 col-end-1">
          {{ game.description }}
        </p>
        <a
          routerLink="/edit/{{ game.id }}"
          class="row-start-1 row-end-1 col-start-2 col-end-2 justify-self-end"
          >Edit</a
        >
        <a
          routerLink="/game/delete/{{ game.id }}"
          class="row-start-2 row-end-2 col-start-2 col-end-2 justify-self-end"
          >Delete</a
        >
      </li>
    </ul>
    <div class="mt-10">
      <a routerLink="/new" class="border rounded-md p-3">Add New</a>
    </div>
  `,
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
