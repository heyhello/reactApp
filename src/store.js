import { createStore } from 'redux';

const InitialState = {
    inputs: [
        {type: "USD"},
        {type: "BYN"}
    ],
    currentCurrency: "USD",
    toEchangeCurrency: "BYN",
    headerItems: [
        "English vocabulari",
        "Russian vocabulari",
        "Home state",
        "Links and articles"
    ]

}

function converter(state = InitialState , action) {
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