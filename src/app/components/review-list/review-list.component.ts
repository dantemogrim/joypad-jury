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
    <ul class="flex flex-col items-center justify-center">
      <li
        class="items-start w-full flex flex-col border-2 rounded-md px my-3"
        *ngFor="let review of getAll()"
      >
        <div class="inline-flex justify-between w-full p-3">
          <p class="text-lg text-green-100">
            {{ review.game }}
          </p>
          <p class="text-lg">
            {{ review.score }}
          </p>
        </div>
        <p class="px-3">
          {{ review.text }}
        </p>
        <div class="inline-flex justify-between w-full">
          <a [routerLink]="['/edit', review.id]">
            <img class="w-12 p-3" src="/assets/edit.svg" alt="Edit review." />
          </a>
          <button (click)="reviewService.delete(review.id)">
            <img
              class="w-12 p-3"
              src="/assets/delete.svg"
              alt="Delete review."
            />
          </button>
        </div>
      </li>
    </ul>
    <div class="my-8">
      <a routerLink="/new" class="border-2 rounded-md p-3">Add New</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListComponent {
  reviewService = inject(ReviewService);
  getAll = this.reviewService.getAll;
}
