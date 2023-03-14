import { Dictionaries } from "app/store/dictionaries/dictionaries.models";
import * as fromActions from './dictionaries.actions'

export interface DictionariesState {
  entities: Dictionaries;
  loading: boolean;
  error: string;
}

const initialState: DictionariesState = {
  entities: null,
  loading: null,
  error: null,
}
export function reducer(state = initialState, action: fromActions.All): DictionariesState {
  switch (action.type) {
    case fromActions.Types.READ: {
      return { ...state, loading: true, error: null }
    }
    case fromActions.Types.READ_SUCCESS: {
      return { ...state, loading: false, entities: action.dictionaries }
    }
    case fromActions.Types.READ_ERROR: {
      return { ...state, loading: false, error: action.error, entities: null }
    }
  }
}
