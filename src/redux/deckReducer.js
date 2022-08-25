import axios from "axios";

const deckData = {
  cards:
    "AS,KS,QS,JS,0S,2S,3S,4S,5S,6S,7S,8S,9S,AD,KD,QD,JD,0D,2D,3D,4D,5D,6D,7D,8D,9D,AH,KH,QH,JH,0H,2H,3H,4H,5H,6H,7H,8H,9H,AC,KC,QC,JC,0C,2C,3C,4C,5C,6C,7C,8C,9C",
  deckID: null,
  error: false,
  loading: false,
};

export function getNewDeck() {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "GET_DECK_LOADING", payload: true });
    axios
      .request(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${state.deck.cards}`
      )
      .then((response) => {
        dispatch({ type: "GET_DECK_ID", payload: response.data.deck_id });
      })
      .catch((error) => dispatch({ type: "GET_DECK_ERROR", payload: error }))
      .finally(() => dispatch({ type: "GET_DECK_LOADING", payload: false }));
  };
}

export default function deckReducer(state = deckData, action) {
  switch (action.type) {
    case "GET_DECK_ID":
      return {
        ...state,
        deckID: action.payload,
      };
    case "GET_DECK_LOADING":
      return { ...state, loading: action.payload };
    case "GET_DECK_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
