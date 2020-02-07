/* eslint-disable default-case */
import produce from 'immer';

import { ADD_DAY, EDIT_DAY } from './types';

const reducer = (state = [], action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_DAY:
        draft.push(action.day);
        break;

      case EDIT_DAY: {
        const { day } = action;
        const index = draft.findIndex(i => i.date === day.date);

        draft[index] = day;

        break;
      }
    }
  });

export * from './actions';
export * from './types';

export default reducer;
