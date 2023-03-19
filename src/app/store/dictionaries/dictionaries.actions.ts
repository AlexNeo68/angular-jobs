import { Action } from '@ngrx/store';
import { Dictionaries } from 'app/store/dictionaries/dictionaries.models';

export enum Types {
  READ = '[Dictionaries] Read: Start',
  READ_SUCCESS = '[Dictionaries] Read: Success',
  READ_ERROR = '[Dictionaries] Read: Error',
}

export class Read implements Action {
  readonly type: string = Types.READ;
  constructor() { }
}

export class ReadSuccess implements Action {
  readonly type: string = Types.READ_SUCCESS;
  public dictionaries: Dictionaries = null;
  constructor(private _dictionaries: Dictionaries) {
    this.dictionaries = _dictionaries
  }
}

export class ReadError implements Action {
  readonly type: string = Types.READ_ERROR;
  constructor(public error: string) { }
}

export type All = Read | ReadSuccess | ReadError;
