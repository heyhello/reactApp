import { createStore } from 'redux';



function converter(state = [], action) {
  if (action.type === 'CONVERT_IN_USD') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(converter);

export default store