import { Component } from '@angular/core';

@Component({
  selector: 'app-game-thumbnail',
  standalone: true,
  imports: [],
  template: `<a>{{ name }}</a>`,
})
export class GameThumbnailComponent {
  // id: number: 1;
  name: string = 'Stardew Valley';
  review: string = 'I am addicted.';
}
