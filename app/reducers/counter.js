import { handleActions } from 'redux-actions';
import actions from '../actions/counter';

export default handleActions({
  [actions.increment]: (state, action) => {
    return state + 1;
  },
  [actions.decrement]: (state, action) => {
    return state - 1;
  }
}, 0);
