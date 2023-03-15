import { createAction, props } from "@ngrx/store";
import { Dictionaries } from "app/store/dictionaries/dictionaries.models";

export enum Types {
  READ = '[Dictionaries] Read: Start',
  READ_SUCCESS = '[Dictionaries] Read: Success',
  READ_ERROR = '[Dictionaries] Read: Error',
}

export const Read = createAction(
  Types.READ
);

export const ReadSuccess = createAction(
  Types.READ_SUCCESS,
  props<Dictionaries>()
);

export const ReadError = createAction(
  Types.READ_ERROR,
  props<{ error: string }>()
);
