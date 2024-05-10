import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ReviewEditComponent } from './pages/review-edit/review-edit.component';
import { ReviewNewComponent } from './pages/review-new/review-new.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Joypad Jury' },
  { path: 'about', component: AboutComponent, title: 'Joypad Jury | About' },
  { path: 'new', component: ReviewNewComponent, title: 'Joypad Jury | New' },
  {
    path: 'edit/:id',
    component: ReviewEditComponent,
    title: 'Joypad Jury | Edit',
  },
  { path: '**', component: HomeComponent, title: 'Joypad Jury' },
];
