import { createAction } from 'redux-actions';

const actions = {
  increment: createAction('INCREMENT_COUNTER'),
  decrement: createAction('DECREMENT_COUNTER'),
  incrementIfOdd: () => {
    return (dispatch, getState) => {
      const { counter } = getState();
      if (counter % 2 === 0)
        return;
      dispatch(actions.increment());
    };
  },
  incrementAsync: (delay = 1000) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.increment());
      }, delay);
    };
  }
}

export default actions;
