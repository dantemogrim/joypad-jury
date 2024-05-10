import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { GameService } from '../../services/game.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-game-new',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  template: `<app-header></app-header>
    <h2 class="font-neue text-3xl md:text-4xl pb-3">Rate New Game</h2>
    <form>
      <div class="mb-3">
        <input
          type="text"
          class="form-control bg-transparent border-2 rounded-md border-gray-200 p-2"
          formControlName="name"
          placeholder="Name"
          required
        />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control bg-transparent border-2 rounded-md border-gray-200 p-2"
          rows="3"
          formControlName="review"
          placeholder="review"
          required
        ></textarea>
      </div>
      <div class="mb-3 inline-flex gap-3">
        <button class="border rounded-md p-3" type="submit">Submit</button>
        <a class="border rounded-md p-3">Go Back</a>
      </div>
    </form>
    <app-footer></app-footer>`,
})
export class GameNewComponent {}
//  <a class="border rounded-md p-3" (click)="goBack()">Go Back</a>

// export class GameNewComponent implements OnInit {
//   route: ActivatedRoute = inject(ActivatedRoute);
//   newForm: FormGroup;

//   constructor(
//     public formBuilder: FormBuilder,
//     private gameService: GameService,
//     private location: Location
//   ) {
//     this.newForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       review: ['', Validators.required],
//       // Add other form controls if needed
//     });
//   }

//   goBack(): void {
//     this.location.back();
//   }

//   onSubmit() {
//     if (this.newForm.valid) {
//       const reviewData = this.newForm.value;
//       this.gameService.store(reviewData);
//       this.goBack();
//     }
//   }

//   ngOnInit(): void {}
// }
