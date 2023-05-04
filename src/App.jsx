import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";


function App() {
  const imgsCard = [
    { path: "src/assets/koot_1.jpg", matched: false },
    { path: "src/assets/koot_2.jpg", matched: false },
    { path: "src/assets/koot_3.jpg", matched: false },
    { path: "src/assets/fa_1.jpg", matched: false },
    { path: "src/assets/fa_2.jpg", matched: false },
    { path: "src/assets/fam_1.jpg", matched: false },
    { path: "src/assets/fam_2.jpg", matched: false },
    { path: "src/assets/fi_1.jpg", matched: false },
    { path: "src/assets/fi_2.jpg", matched: false },
    { path: "src/assets/frank_1.jpg", matched: false },
    { path: "src/assets/frank_2.jpg", matched: false },
    { path: "src/assets/lu_1.jpg", matched: false },
    { path: "src/assets/lu_2.jpg", matched: false },
    { path: "src/assets/ro_1.jpg", matched: false },
    { path: "src/assets/ro_2.jpg", matched: false },
    { path: "src/assets/koot_4.jpg", matched: false },
  ];
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0); // identify true(1) & false(0)

  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const createCard = () => {
    const shuffed = [...imgsCard, ...imgsCard]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setOne(null)
    setTwo(null)
    setCards(shuffed);
    setTurns(0);
  };
  
  const chooseChoice = (card) => {
    // console.log(card)
    one ? setTwo(card) : setOne(card);
  };

  const reopenTurn = () => {
    setOne(null);
    setTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (one && two) {
      // setDisabled(true);
      if (one.path == two.path) {
        console.log("Matchesssss");
        setCards((prev) =>
          prev.map((card) => {
            if (card.path == one.path) {
              return ({ ...card, matched: true });
            } else {
              return card;
            }
          })
        );
        reopenTurn();
      } else {
        console.log("Don't matchess Play Again?");
        setTimeout(() => reopenTurn(), 1000);
      }
    }
  }, [one, two]);
  return (
    <>
      <h1>Magic Cat With Boaty</h1>

      <button onClick={createCard}>Enjoy The Game!</button>

      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            chooseChoice={chooseChoice}
            flip={card == one || card == two || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      <span>Your Turn: {turns}</span>
    </>
  );
}

export default App;
