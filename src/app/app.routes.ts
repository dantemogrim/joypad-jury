import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GameComponent } from './pages/game/game.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Joypad Jury' },
  { path: 'about', component: AboutComponent, title: 'Joypad Jury | About' },
  { path: 'game/:id', component: GameComponent, title: 'Joypad Jury | Game' },
  { path: '**', component: HomeComponent, title: 'Joypad Jury' },
];
