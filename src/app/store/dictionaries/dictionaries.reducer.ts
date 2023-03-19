import { Action, createReducer, on } from '@ngrx/store';
import {
  ReadDictionary,
  ReadDictionaryError,
  ReadDictionarySuccess,
} from 'app/store/dictionaries/dictionaries.actions';
import { Dictionaries } from 'app/store/dictionaries/dictionaries.models';

export interface DictionariesState {
  entities: Dictionaries;
  loading: boolean;
  error: string;
}

const initialState: DictionariesState = {
  entities: null,
  loading: null,
  error: null,
};

const dictionariesReducer = createReducer(
  initialState,
  on(
    ReadDictionary,
    (state): DictionariesState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    ReadDictionarySuccess,
    (state, action): DictionariesState => ({
      ...state,
      loading: false,
      entities: action.dictionaries,
    })
  ),
  on(
    ReadDictionaryError,
    (state, action): DictionariesState => ({
      ...state,
      loading: false,
      error: action.error,
      entities: null,
    })
  )
);

export function reducer(state: DictionariesState, action: Action) {
  return dictionariesReducer(state, action);
}
