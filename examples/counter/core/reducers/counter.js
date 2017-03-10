import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants';

const INITIAL_STATE = 0;

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;

    case DECREMENT_COUNTER:
      return state - 1;

    default:
      return state;
  }
}
