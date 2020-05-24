import { SortsState, Action, SortedBy } from 'redux/interfaces';
import { ActionType } from 'redux/actionType';

export const initialState: SortsState = {
  sortedBy: SortedBy.CreatedAt,
};

const setSorting = (state: SortsState, payload: SortedBy): SortsState => {
  return {
    ...state,
    sortedBy: payload,
  };
};

const reducer = (state = initialState, action: Action): SortsState => {
  switch (action.type) {
    case ActionType.SET_SORTED_BY:
      return setSorting(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
