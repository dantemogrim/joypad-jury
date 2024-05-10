import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  template: `
    <h2 class="font-neue text-3xl md:text-4xl pb-3">My Game Reviews</h2>
    <ul
      class="flex flex-col divide-y gap-10 items-center justify-center w-full"
    >
      <li
        class="grid items-center grid-rows-2 grid-cols-2 gap-2 w-full max-h-25"
        *ngFor="let review of getAll()"
      >
        <p
          class="text-lg row-start-1 row-end-1 col-start-1 col-end-1 text-green-100"
        >
          {{ review.game }}
        </p>
        <p class="row-start-2 row-end-2 col-start-1 col-end-1">
          {{ review.text }}
        </p>
        <a
          [routerLink]="['/edit', review.id]"
          class="row-start-1 row-end-1 col-start-2 col-end-2 justify-self-end"
          >Edit</a
        >
        <button
          class="row-start-2 row-end-2 col-start-2 col-end-2 justify-self-end"
          (click)="reviewService.delete(review.id)"
        >
          Delete
        </button>
      </li>
    </ul>
    <div class="mt-10">
      <a routerLink="/new" class="border rounded-md p-3">Add New</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListComponent {
  // TODO switch out edit + delete with icons.
  reviewService = inject(ReviewService);
  getAll = this.reviewService.getAll;
}
