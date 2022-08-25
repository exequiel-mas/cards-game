import axios from "axios";

const dataState = {
  card: null,
  error: false,
  loading: false,
  hearts: [],
  diamonds: [],
  clubs: [],
  spades: [],
  diamondsHasQ: false,
  spadesHasQ: false,
  heartsHasQ: false,
  clubsHasQ: false,
  remaining: 48,
};

const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "JACK",
  "QUEEN",
  "KING",
  "ACE",
];

export function drawCard() {
  return (dispatch, getState) => {
    const state = getState();
    //SI TODAS LAS PILAS TIENEN Q, RETORNAR
    if (
      state.draw.clubsHasQ &&
      state.draw.heartsHasQ &&
      state.draw.spadesHasQ &&
      state.draw.diamondsHasQ
    )
      return;
    dispatch({ type: "GET_CARD_LOADING", payload: true });
    axios
      .request(
        `https://deckofcardsapi.com/api/deck/${state.deck.deckID}/draw/?count=1`
      )
      .then((response) => {
        dispatch({
          type: "GET_CARD",
          payload: response.data.cards[0],
          pileName: response.data.cards[0].suit.toLowerCase(),
        });
      })
      .catch((error) => dispatch({ type: "GET_CARD_ERROR", payload: error }))
      .finally(() => dispatch({ type: "GET_CARD_LOADING", payload: false }));
  };
}

export function returnDeck() {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "RETURN_DECK_LOADING", payload: true });
    axios
      .request(
        `https://deckofcardsapi.com/api/deck/${state.deck.deckID}/return/`
      )
      .then((response) => {
        dispatch({
          type: "RETURN_DECK",
        });
      })
      .catch((error) => dispatch({ type: "GET_CARD_ERROR", payload: error }))
      .finally(() => dispatch({ type: "GET_CARD_LOADING", payload: false }));
  };
}

export default function drawReducer(state = dataState, action) {
  switch (action.type) {
    case "GET_CARD":
      return {
        ...state,
        [action.pileName]: [...state[action.pileName], action.payload].sort(
          (a, b) => values.indexOf(b.value) - values.indexOf(a.value)
        ),
        [action.pileName + "HasQ"]:
          action.payload.value === "QUEEN"
            ? true
            : state[action.pileName + "HasQ"],
        remaining: state.remaining - 1,
      };
    case "GET_CARD_LOADING":
      return { ...state, loading: action.payload };
    case "GET_CARD_ERROR":
      return { ...state, error: action.payload };
    case "RETURN_DECK":
      return dataState;
    default:
      return state;
  }
}
