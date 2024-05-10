import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Game } from '../models/game.model';

@Injectable({ providedIn: 'root' })
export class GamesFirebaseService {
  gamesCollection = collection(this.firestore, 'games');

  constructor(private firestore: Firestore) {}

  getGames(): Observable<Game[]> {
    return collectionData(this.gamesCollection, {
      idField: 'id',
    }) as Observable<Game[]>;
  }

  // addGame(name: string, review: string) {
  //   this.gamesCollection.add({ name, review });
  // }

  // editGame(id: string, name: string, review: string) {
  //   this.gamesCollection.doc(id).update({ name, review });
  // }

  // removeGame(id: string) {
  //   this.gamesCollection.doc(id).delete();
  // }
}
