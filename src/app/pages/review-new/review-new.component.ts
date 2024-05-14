import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ReviewService } from '../../services/review.service';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-review-new',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  template: `<app-header></app-header>
    <h2 class="font-neue text-3xl md:text-4xl pb-3">Review Game</h2>
    <form
      class="flex flex-col items-start gap-4"
      (ngSubmit)="reviewService.create(game, score, text)"
    >
      <input
        type="text"
        class="form-control bg-transparent border-2 rounded-md border-gray-200 p-2"
        [(ngModel)]="game"
        (ngModelChange)="onGameChange($event)"
        placeholder="Game"
        name="game"
        required
      />
      <textarea
        class="form-control bg-transparent border-2 rounded-md border-gray-200 p-2"
        rows="3"
        [(ngModel)]="text"
        (ngModelChange)="onTextChange($event)"
        placeholder="Text"
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
        <option value="" disabled selected>--- Pick a score ---</option>
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
    <app-footer></app-footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewNewComponent {
  reviewService = inject(ReviewService);
  game: string = '';
  score: string = '';
  text: string = '';
  location = inject(Location);

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
