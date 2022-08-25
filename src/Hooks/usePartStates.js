import { useSelector } from "react-redux";

export function usePartStates() {
  const gameFinished = useSelector((state) => state.draw.gameFinished);
  const diamonds = useSelector((state) => state.draw.diamonds);
  const hearts = useSelector((state) => state.draw.hearts);
  const clubs = useSelector((state) => state.draw.clubs);
  const spades = useSelector((state) => state.draw.spades);
  const remaining = useSelector((state) => state.draw.remaining);
  const suits = [diamonds, hearts, clubs, spades];

  return {
    gameFinished,
    remaining,
    suits,
  };
}
