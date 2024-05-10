import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ReviewService } from '../../services/review.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-review-edit',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule, FooterComponent],
  template: `
    <app-header></app-header>
    <div>
      <h2 class="font-neue text-3xl md:text-4xl pb-3">
        Edit Review {{ game }}
      </h2>
      <form
        class="flex flex-col items-start gap-4"
        (ngSubmit)="reviewService.update(reviewId, game, score, text)"
      >
        <input
          type="text"
          class="bg-transparent border-2 rounded-md border-gray-200 p-2"
          [(ngModel)]="game"
          (ngModelChange)="onGameChange($event)"
          placeholder="Game"
          name="game"
          required
        />
        <textarea
          class="bg-transparent border-2 rounded-md border-gray-200"
          rows="3"
          [(ngModel)]="text"
          name="text"
          required
        ></textarea>
        <div class="mb-3 inline-flex gap-3">
          <button type="submit" class="">Submit</button>
        </div>
      </form>
      <button>Go Back</button>
    </div>
    <app-footer></app-footer>
  `,
})
export class ReviewEditComponent implements OnInit {
  reviewService = inject(ReviewService);
  // Full url.
  currentRoute: ActivatedRoute = inject(ActivatedRoute);
  reviewId = this.currentRoute.snapshot.paramMap.get('id');
  // currentReview = this.reviewService.get(this.reviewId);
  currentReview = this.getCurrentReview();
  game: string = '';
  score: string = '';
  text: string = '';

  // TODO use location on Go Back buttons.
  // TODO fix update method.

  ngOnInit() {
    // console.log(this.currentReview);
  }

  async getCurrentReview() {
    const review = await this.reviewService.getById(this.reviewId);
    if (review) {
      this.game = review.game;
      this.text = review.text;
    }
  }

  onGameChange(newGame: string) {
    this.game = newGame;
  }

  onTextChange(newText: string) {
    this.text = newText;
  }
}
