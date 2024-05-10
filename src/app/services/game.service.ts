import { Injectable, computed, inject } from '@angular/core';
import { Game } from '../models/game.model';
import { Router } from '@angular/router';
import {
  CollectionReference,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  firestore = inject(Firestore);
  gamesCollection = collection(
    this.firestore,
    'games'
  ) as CollectionReference<Game>;
  games = toSignal(collectionData(this.gamesCollection, { idField: 'id' }), {
    initialValue: [],
  });

  totalGames = computed(() => this.games().length);

  router = inject(Router);
  constructor() {}

  async addGame(newGame: Partial<Game>) {
    await addDoc(this.gamesCollection, { ...newGame });
    this.router.navigate(['/']);
  }

  async deleteGame(id: string) {
    const docRef = doc(this.firestore, 'games', id);
    await deleteDoc(docRef);
  }
}
