import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import drawReducer from "./drawReducer";
import deckReducer from "./deckReducer";

const rootReducer = combineReducers({
  draw: drawReducer,
  deck: deckReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
