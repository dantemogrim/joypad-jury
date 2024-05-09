import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GameEditComponent } from './pages/game-edit/game-edit.component';
import { GameInfoComponent } from './pages/game-info/game-info.component';
import { GameNewComponent } from './pages/game-new/game-new.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Joypad Jury' },
  { path: 'about', component: AboutComponent, title: 'Joypad Jury | About' },
  {
    path: 'edit/:id',
    component: GameEditComponent,
    title: 'Joypad Jury | Edit',
  },
  {
    path: 'info/:id',
    component: GameInfoComponent,
    title: 'Joypad Jury | Info',
  },
  {
    path: 'new',
    component: GameNewComponent,
    title: 'Joypad Jury | New',
  },
  { path: '**', component: HomeComponent, title: 'Joypad Jury' },
];
