import {
	addDoc,
	collection,
	collectionData,
	CollectionReference,
	deleteDoc,
	doc,
	Firestore,
	getDoc,
	updateDoc
} from "@angular/fire/firestore";
import { Injectable, computed, inject } from "@angular/core";
import { Review } from "../models/review.model";
import { Router } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
	providedIn: "root"
})
export class ReviewService {
	firestore = inject(Firestore);
	router = inject(Router);
	reviewCollection = collection(
		this.firestore,
		"reviews"
	) as CollectionReference<Review>;

	getAll = toSignal(collectionData(this.reviewCollection, { idField: "id" }), {
		initialValue: []
	});

	async getById(id: any): Promise<Review | null> {
		const docRef = await getDoc(doc(this.firestore, "reviews", id));
		if (docRef.exists()) {
			return {
				game: docRef.data()["game"],
				text: docRef.data()["text"]
			} as Review;
		} else {
			return null;
		}
	}

	reviewCount = computed(() => this.getAll().length);

	async create(game: string, score: string, text: string) {
		await addDoc(collection(this.firestore, "reviews"), {
			game,
			score,
			text
		});
		this.router.navigate(["/"]);
	}

	async delete(id: string) {
		const docRef = doc(this.firestore, "reviews", id);
		await deleteDoc(docRef);
	}

	async update(documentId: any, game: string, score: string, text: string) {
		const ref = doc(this.firestore, "reviews", documentId);
		await updateDoc(ref, {
			game: game,
			score: score,
			text: text
		});
		this.router.navigate(["/"]);
	}
}
