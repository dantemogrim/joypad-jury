import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
})
export class GameComponent {
  name: string = 'Dilan & Moa';
  description: string = 'comedy';
}
