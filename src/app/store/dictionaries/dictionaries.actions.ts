import { createAction, props } from '@ngrx/store';
import { Dictionaries } from 'app/store/dictionaries/dictionaries.models';

export enum Types {
  READ = '[Dictionaries] Read: Start',
  READ_SUCCESS = '[Dictionaries] Read: Success',
  READ_ERROR = '[Dictionaries] Read: Error',
}

export const ReadDictionary = createAction(Types.READ);
export const ReadDictionarySuccess = createAction(
  Types.READ_SUCCESS,
  props<{ dictionaries: Dictionaries }>()
);
export const ReadDictionaryError = createAction(
  Types.READ_ERROR,
  props<{ error: string }>()
);
