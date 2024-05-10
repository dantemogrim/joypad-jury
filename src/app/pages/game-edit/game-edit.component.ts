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
  selector: 'app-game-edit',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  template: `
    <app-header></app-header>
    <div>
      <h2 class="font-neue text-3xl md:text-4xl pb-3">Edit Review:</h2>
      <form>
        <div class="mb-3">
          <textarea
            class="form-control bg-transparent border-2 rounded-md border-gray-200"
            rows="3"
            formControlName="review"
            required
          ></textarea>
        </div>
        <div class="mb-3 inline-flex gap-3">
          <button type="submit" class="">Submit</button>
        </div>
      </form>
      <button>Go Back</button>
    </div>
    <app-footer></app-footer>
  `,
})
export class GameEditComponent {}
