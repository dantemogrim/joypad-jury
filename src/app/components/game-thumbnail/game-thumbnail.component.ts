import { Component } from '@angular/core';

@Component({
  selector: 'app-game-thumbnail',
  standalone: true,
  imports: [],
  template: `<a>{{ name }}</a>`,
})
export class GameThumbnailComponent {
  name: string = 'Stardew Valley';
  description: string = 'I am addicted.';
}
