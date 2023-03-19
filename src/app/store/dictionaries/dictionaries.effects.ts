import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import * as jsonCountries from 'assets/countries.json';

import { map, of, switchMap, tap, zip } from 'rxjs';
import {
  Dictionaries,
  Dictionary,
} from 'app/store/dictionaries/dictionaries.models';
import { ControlItem, Item } from 'app/models/frontend';
import {
  ReadDictionary,
  ReadDictionarySuccess,
} from 'app/store/dictionaries/dictionaries.actions';

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
export class DictionariesEffects {
  constructor(private actions$: Actions, private firestore: Firestore) {}

  readDictionaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReadDictionary),
      switchMap(() => {
        return zip(
          collectionData(collection(this.firestore, 'roles')).pipe(
            tap((items) => items)
          ),
          collectionData(collection(this.firestore, 'specializations')),
          collectionData(collection(this.firestore, 'qualifications')),
          collectionData(collection(this.firestore, 'skills')),
          of(
            (jsonCountries as any).default.map((country) => ({
              id: country.code.toUpperCase(),
              name: country.name,
              icon: {
                src: null,
                cssClass: 'fflag fflag-' + country.code.toUpperCase(),
              },
            }))
          )
        ).pipe(
          map(([roles, specializations, qualifications, skills, countries]) => {
            const dictionaries: Dictionaries = {
              roles: addDictionary(roles),
              specializations: null, //addDictionary(specializations),
              qualifications: null, //addDictionary(qualifications),
              skills: null, //addDictionary(skills),
              countries: addDictionary(countries),
            };
            return ReadDictionarySuccess({ dictionaries });
          })
        );
      })
    )
  );
}
