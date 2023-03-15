import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Item, ControlItem } from 'app/models/frontend';
import { Types } from 'app/store/dictionaries/dictionaries.actions';
import { Dictionary } from 'app/store/dictionaries/dictionaries.models';
import { collection, Firestore } from 'firebase/firestore';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

const itemToControlItem = (x: Item): ControlItem => ({
  value: x.id,
  label: x.name,
  icon: x.icon,
});

const addDictionary = (items: Item[]): Dictionary => ({
  items,
  controlItems: [...items].map((x) => itemToControlItem(x)),
});

@Injectable()
export class DictionariesEffect {
  constructor(private actions$: Actions, private firestore: Firestore) {}

  getDicitonaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Types.READ),
      switchMap(() => {
        const dbItems = collection(firestore, 'roles');
        this.items$ = collectionData(dbItems);

        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );
}
