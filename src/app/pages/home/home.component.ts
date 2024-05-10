import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { ReviewListComponent } from '../../components/review-list/review-list.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ReviewListComponent, FooterComponent],
  template: `<app-header></app-header>
    <app-review-list></app-review-list>
    <app-footer></app-footer>`,
})
export class HomeComponent {}
