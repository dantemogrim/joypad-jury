import { catchError, map } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  REST_API: string = 'http://localhost:8000';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  index() {
    return this.httpClient.get(`${this.REST_API}/game`);
  }

  // create(game: Game): Observable<any> {
  //   return this.httpClient
  //     .post(`${this.REST_API}/game/create`, game)
  //     .pipe(catchError(this.handleError));
  // }

  store(game: Game): Observable<any> {
    return this.httpClient
      .post(`${this.REST_API}/game`, game)
      .pipe(catchError(this.handleError));
  }

  show(id: number): Observable<any> {
    return this.httpClient
      .get(`${this.REST_API}/game/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(id: number, game: Game): Observable<any> {
    return this.httpClient
      .put(`${this.REST_API}/game/${id}`, game)
      .pipe(catchError(this.handleError));
  }

  destroy(id: number): Observable<any> {
    return this.httpClient
      .delete(`${this.REST_API}/game/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }

    if (!(error.error instanceof ErrorEvent)) {
      errorMessage = `Error!\nCode: ${error.status}\nMessage: ${error.message}`;
    }

    return errorMessage;
  }
}
