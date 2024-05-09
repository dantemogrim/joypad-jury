import { Component } from '@angular/core';

import { GameListComponent } from '../games/game-list/game-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [GameListComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
