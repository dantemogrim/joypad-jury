import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HomeComponent, RouterOutlet],
  providers: [],
  template: ` <router-outlet></router-outlet>`,
  styleUrl: './app.component.css',
})
export class AppComponent {}
