import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `<a class="">
    <p>{{ name }}</p>
  </a> `,
})
export class GameComponent {
  name: string = 'Dilan & Moa';
  description: string = 'comedy';
}
