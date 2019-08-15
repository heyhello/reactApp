import { createStore } from 'redux';

const InitialState = {
    inputs: [
        {type: "USD"},
        {type: "BYN"}
    ],
    currentCurrency: "USD",
    toEchangeCurrency: "BYN"


}

function converter(state = {}, action) {
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