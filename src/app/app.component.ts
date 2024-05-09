import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HttpClientModule,
    RouterOutlet,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// export class AppComponent {
export class AppComponent implements OnInit {
  title = 'Joypad Jury';

  REST_API: string = 'http://localhost:8000/game';
  httpClient = inject(HttpClient);
  data: any = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get(this.REST_API).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
