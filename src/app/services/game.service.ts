import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  REST_API: string = 'http://localhost:8000';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  index() {
    return this.httpClient.get(this.REST_API);
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
