// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function useCardsData() {
//   const deckId = "new";
//   const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
//   const [cardsData, setCardsData] = useState([]);
//   const [errorCardsData, setCardsError] = useState(null);
//   const [loadingCardsData, setCardsLoading] = useState(false);

//   useEffect(() => {
//     (async function () {
//       try {
//         setLoading(true);
//         const response = await axios.get(url);
//         setWeatherData(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return {
//     cardsData,
//     errorCardsData,
//     loadingCardsData,
//   };
// }
