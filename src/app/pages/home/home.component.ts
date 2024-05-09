import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { GameListComponent } from '../../components/game-list/game-list.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, GameListComponent, FooterComponent],
  template: `<app-header></app-header>
    <app-game-list></app-game-list>
    <app-footer></app-footer>`,
})
export class HomeComponent {}
