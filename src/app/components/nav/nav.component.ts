import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `<nav
    class="flex items-center justify-between h-fit font-neue pb-5 md:pb-10"
  >
    <a class="inline-flex items-center gap-3" [routerLink]="['/']">
      <img
        class="w-10 md:w-16"
        src="/assets/logo.svg"
        alt="Joypad Jury controller logo."
      />
      <h1 class="text-4xl md:text-5xl text-bold">Joypad Jury</h1>
    </a>
    <ul class="inline-flex gap-8 text-2xl md:text-3xl">
      <li><a routerLink="/about">About</a></li>
    </ul>
  </nav>`,
})
export class NavComponent {}
