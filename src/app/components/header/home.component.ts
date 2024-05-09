import { Component } from '@angular/core';

import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  template: `<header class="text-center">
    <app-nav></app-nav>
  </header> `,
})
export class HeaderComponent {}
