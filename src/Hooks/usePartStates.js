import { useSelector } from "react-redux";

export function usePartStates() {
  const dQ = useSelector((state) => state.draw.diamondsHasQ);
  const hQ = useSelector((state) => state.draw.heartsHasQ);
  const cQ = useSelector((state) => state.draw.clubsHasQ);
  const sQ = useSelector((state) => state.draw.spadesHasQ);
  const diamonds = useSelector((state) => state.draw.diamonds);
  const hearts = useSelector((state) => state.draw.hearts);
  const clubs = useSelector((state) => state.draw.clubs);
  const spades = useSelector((state) => state.draw.spades);
  const remaining = useSelector((state) => state.draw.remaining);
  const suits = [diamonds, hearts, clubs, spades];

  return {
    dQ,
    hQ,
    cQ,
    sQ,
    remaining,
    suits,
  };
}
