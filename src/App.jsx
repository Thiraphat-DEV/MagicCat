import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { useEffect } from "react";

function App() {
  const imgsCard = [{ path: "card", matched: false }];
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0); // identify true(1) & false(0)

  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);

  const createCard = () => {
    const shuffed = [...imgsCard, ...imgsCard]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffed);
    setTurns(0);
  };

  const chooseChoice = (card) => {
    // console.log(card)
    one ? setTwo(one) : setOne(card);
  };

  const reopenTurn = () => {
    setOne(null);
    setTwo(null);
    setTurns((prev) => prev + 1);
  };

  useEffect(() => {
    if (one && two) {
      if (one.path === two.path) {
        // console.log("Matchesssss");
        setCards(prev => (
          prev.map(card => {
            if(card.path === one.path) {
              return {...card, matched: true}
            }else {
              return card
            }
          })
        ))
        reopenTurn();
      } else {
        console.log("Don't matchess Play Again?");
        reopenTurn();
      }
    }
  }, [one, two]);
  return (
    <>
      <h1>Magic Cat With Boaty</h1>

      <button onClick={createCard}>Enjoy The Game!</button>

      <div className="card-grid">
        {cards?.map((card) => (
          <Card key={card.id} card={card} chooseChoice={chooseChoice} flip={} />
        ))}
      </div>
    </>
  );
}

export default App;
