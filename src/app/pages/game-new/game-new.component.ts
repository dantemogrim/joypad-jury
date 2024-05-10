import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { GameService } from '../../services/game.service';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-game-new',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  template: `<app-header></app-header>
    <h2 class="font-neue text-3xl md:text-4xl pb-3">Rate New Game</h2>
    <form (ngSubmit)="gameService.addGame(name, review)">
      <div class="mb-3">
        <input
          type="text"
          class="form-control bg-transparent border-2 rounded-md border-gray-200 p-2"
          [(ngModel)]="name"
          (ngModelChange)="onNameChange($event)"
          placeholder="Name"
          name="name"
          required
        />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control bg-transparent border-2 rounded-md border-gray-200 p-2"
          rows="3"
          [(ngModel)]="review"
          (ngModelChange)="onReviewChange($event)"
          placeholder="Review"
          name="review"
          required
        ></textarea>
      </div>
      <div class="mb-3 inline-flex gap-3">
        <button class="border rounded-md p-3" type="submit">Submit</button>
        <a routerLink="/" class="border rounded-md p-3">Go Back</a>
      </div>
    </form>
    <app-footer></app-footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameNewComponent {
  gameService = inject(GameService);
  name: string = '';
  review: string = '';

  onNameChange(newName: string) {
    this.name = newName;
  }

  onReviewChange(newReview: string) {
    this.review = newReview;
  }

  // save() {
  //   this.gameService.addGame({
  //     name: this.name.trim(),
  //     review: this.review.trim(),
  //   });
  // }
}
