import { Component } from '@angular/core';

@Component({
  selector: 'app-game-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './game-thumbnail.component.html',
})
export class GameThumbnailComponent {
  name: string = 'Stardew Valley';
  description: string = 'I am addicted.';
}
