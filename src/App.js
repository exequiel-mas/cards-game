import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewDeck } from "./redux/deckReducer";
import Pila from "./Components/Pila";
import Card from "./Components/Card";
import Maso from "./Components/Maso";
import Button from "./Styled/ButtonStyle";
import Board from "./Styled/BoardStyle";
import { nanoid } from "nanoid";
import { returnDeck } from "./redux/drawReducer";
import { drawCard } from "./redux/drawReducer";
import { usePartStates } from "./Hooks/usePartStates";

var interval = null;

const App = () => {
  const dispatch = useDispatch();
  const { dQ, hQ, cQ, sQ, remaining, suits } = usePartStates();

  useEffect(() => {
    dispatch(getNewDeck());
  }, [dispatch]);

  const stopStuff = () => clearInterval(interval);
  const startStuff = () =>
    !interval
      ? (interval = setInterval(() => dispatch(drawCard()), 1000))
      : clearInterval(interval);

  return (
    <Board>
      <Pila>
        <Maso startDrawing={startStuff} />
        <p>
          {dQ && hQ && sQ && cQ
            ? `Game Finished, remaining cards: ${remaining}`
            : `Remaining Cards: ${remaining}`}
        </p>
        <Button
          onClick={() => {
            stopStuff();
            dispatch(returnDeck());
          }}
        >
          Restart
        </Button>
      </Pila>
      {suits.map((el) => (
        <Pila key={nanoid()}>
          {el.map((card, index) => (
            <Card
              src={card.image}
              index={index}
              alt={card.value}
              key={nanoid()}
            >
              {card.value}
            </Card>
          ))}
        </Pila>
      ))}
    </Board>
  );
};

export default App;
