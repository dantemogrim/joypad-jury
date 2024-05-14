import { CommonModule, Location } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { ReviewService } from "../../services/review.service";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
	selector: "app-review-edit",
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
          name="game"
          required
        />
        <textarea
          class="p-1 bg-transparent border-2 rounded-md border-gray-200"
          rows="3"
          [(ngModel)]="text"
          name="text"
          required
        ></textarea>
        <select
          class="bg-transparent border-2 p-2 rounded-md"
          [(ngModel)]="score"
          (ngModelChange)="onScoreChange($event)"
          name="score"
          required
        >
          <option value="{{ score }}" selected disabled>
            --- Pick a score ---
          </option>
          <option value="🔥">🔥</option>
          <option value="🔥🔥">🔥🔥</option>
          <option value="🔥🔥🔥">🔥🔥🔥</option>
          <option value="🔥🔥🔥🔥">🔥🔥🔥🔥</option>
          <option value="🔥🔥🔥🔥🔥">🔥🔥🔥🔥🔥</option>
        </select>
        <div class="mb-3 inline-flex gap-3">
          <button class="border-2 rounded-md p-3" type="submit">Submit</button>
          <button class="border-2 rounded-md p-3" (click)="goBack()">
            Go Back
          </button>
        </div>
      </form>
    </div>
    <app-footer></app-footer>
  `
})
export class ReviewEditComponent {
	reviewService = inject(ReviewService);
	// Full url.
	currentRoute: ActivatedRoute = inject(ActivatedRoute);
	reviewId = this.currentRoute.snapshot.paramMap.get("id");
	currentReview = this.getCurrentReview();
	game: string = "";
	score: string = "";
	text: string = "";
	location = inject(Location);

	async getCurrentReview() {
		const review = await this.reviewService.getById(this.reviewId);
		if (review) {
			this.game = review.game;
			this.score = review.score;
			this.text = review.text;
		}
	}

	onGameChange(newGame: string) {
		this.game = newGame;
	}

	onScoreChange(newScore: string) {
		this.score = newScore;
	}

	onTextChange(newText: string) {
		this.text = newText;
	}

	goBack() {
		this.location.back();
	}
}
