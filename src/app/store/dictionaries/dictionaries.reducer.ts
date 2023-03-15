import { createReducer, on } from '@ngrx/store';
import {
  Read,
  ReadError,
  ReadSuccess,
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

export const dictionariesReducer = createReducer(
  initialState,
  on(
    Read,
    (state): DictionariesState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    ReadSuccess,
    (state, action): DictionariesState => ({
      ...state,
      loading: false,
      entities: action.dictionaries,
    })
  ),
  on(
    ReadError,
    (state, action): DictionariesState => ({
      ...state,
      loading: false,
      error: action.error,
      entities: null,
    })
  )
);
