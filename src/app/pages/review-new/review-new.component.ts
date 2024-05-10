import { CommonModule } from '@angular/common';
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
      (ngSubmit)="reviewService.addReview(game, text)"
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
        <option value="">--- Pick a score ---</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <div class="mb-3 inline-flex gap-3">
        <button class="border rounded-md p-3" type="submit">Submit</button>
        <a routerLink="/" class="border rounded-md p-3">Go Back</a>
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

  onGameChange(newGame: string) {
    this.game = newGame;
  }

  onScoreChange(newScore: string) {
    this.score = newScore;
  }

  onTextChange(newText: string) {
    this.text = newText;
  }
}
