import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

import { GameService } from '../../services/game.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <h2 class="font-neue text-3xl md:text-4xl pb-3">
      Game Info: {{ game.name }}
    </h2>
    <app-footer></app-footer>
  `,
})
export class GameInfoComponent implements OnInit {
  id: any;
  route: ActivatedRoute = inject(ActivatedRoute);
  game: any = {};

  constructor(private gameService: GameService) {
    this.id = Number(this.route.snapshot.params['id']);
    this.gameService.show(this.id).subscribe((res) => {
      this.game = res;
    });
  }

  ngOnInit(): void {}
}
