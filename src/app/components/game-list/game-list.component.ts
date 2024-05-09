import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
    <ul *ngFor="let game of data">
      <li>{{ game.name }}</li>
    </ul>
    <app-game-thumbnail></app-game-thumbnail>
    <button class="p-1 border rounded-md my-4">Add New</button>
  </div> `,
})
export class GameListComponent implements OnInit {
  REST_API: string = 'http://localhost:8000/game';
  httpClient = inject(HttpClient);
  data: any = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get(this.REST_API).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

  games: Game[] = [
    new Game(
      'Hollow Knight',
      'Difficult but rewarding.',
      'https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp'
    ),
  ];
}
