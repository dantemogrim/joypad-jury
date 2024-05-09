import { Component } from '@angular/core';

import { GameListComponent } from '../game-list/game-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [GameListComponent],
  template: `<main>
    <app-game-list></app-game-list>
  </main>`,
})
export class MainComponent {}
