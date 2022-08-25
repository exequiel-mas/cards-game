import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewDeck } from "./redux/deckReducer";
import Pila from "./Components/Pila";
import Card from "./Components/Card";
import Maso from "./Components/Maso";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { returnDeck } from "./redux/drawReducer";
import { drawCard } from "./redux/drawReducer";

var interval = null;

const App = () => {
  const dispatch = useDispatch();
  const dQ = useSelector((state) => state.draw.diamondsHasQ);
  const hQ = useSelector((state) => state.draw.heartsHasQ);
  const cQ = useSelector((state) => state.draw.clubsHasQ);
  const sQ = useSelector((state) => state.draw.spadesHasQ);
  const diamonds = useSelector((state) => state.draw.diamonds);
  const hearts = useSelector((state) => state.draw.hearts);
  const clubs = useSelector((state) => state.draw.clubs);
  const spades = useSelector((state) => state.draw.spades);
  const remaining = useSelector((state) => state.draw.remaining);

  function startStuff() {
    interval = setInterval(() => dispatch(drawCard()), 2000);
  }

  function stopStuff() {
    clearInterval(interval);
  }

  useEffect(() => {
    dispatch(getNewDeck());
  }, [dispatch]);

  return (
    <Board>
      <Pila>
        <Maso startDrawing={startStuff} />
        <h3>
          {dQ && hQ && sQ && cQ
            ? "Terminó el juego"
            : `Te quedan ${remaining} cartas`}
        </h3>
        <Button
          variant="contained"
          onClick={() => {
            stopStuff();
            dispatch(returnDeck());
          }}
        >
          Restart
        </Button>
      </Pila>
      <Pila>
        {diamonds.map((card, index) => (
          <Card src={card.image} index={index} alt={card.value} key={nanoid()}>
            {card.value}
          </Card>
        ))}
      </Pila>
      <Pila>
        {spades.map((card, index) => (
          <Card src={card.image} index={index} alt={card.value} key={nanoid()}>
            {card.value}
          </Card>
        ))}
      </Pila>
      <Pila>
        {clubs.map((card, index) => (
          <Card src={card.image} index={index} alt={card.value} key={nanoid()}>
            {card.value}
          </Card>
        ))}
      </Pila>
      <Pila>
        {hearts.map((card, index) => (
          <Card src={card.image} index={index} alt={card.value} key={nanoid()}>
            {card.value}
          </Card>
        ))}
      </Pila>
    </Board>
  );
};

const Board = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  background-color: green;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

export default App;
