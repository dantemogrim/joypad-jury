import { Injectable, computed, inject } from '@angular/core';
import { Review } from '../models/review.model';
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
export class ReviewService {
  firestore = inject(Firestore);
  reviewCollection = collection(
    this.firestore,
    'reviews'
  ) as CollectionReference<Review>;
  reviews = toSignal(collectionData(this.reviewCollection, { idField: 'id' }), {
    initialValue: [],
  });

  totalGames = computed(() => this.reviews().length);

  router = inject(Router);
  constructor() {}

  async addReview(game: string, text: string) {
    const docRef = await addDoc(collection(this.firestore, 'reviews'), {
      game,
      text,
    });
    // console.log('Document written with ID: ', docRef.id);
    this.router.navigate(['/']);
  }

  async deleteReview(id: string) {
    const docRef = doc(this.firestore, 'reviews', id);
    await deleteDoc(docRef);
  }

  // async updateGame(id: string, review: string) {
  //   const docRef = doc(this.firestore, 'reviews', id);
  //   await docRef.update({
  //     review,
  //   });
  // }
}
