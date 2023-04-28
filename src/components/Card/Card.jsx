import "./Card.css";

export default function Card({ card, chooseChoice, flip, disabled }) {
  const choiceClick = () => {
    // if !disabled then show card choice 👇
    disabled ?? chooseChoice(card);
  };
  return (
    <>
      <div className="card">
        <div className={flip ? "flip" : ""}>
          <img
            src={card.path}
            alt="front card"
            className="front"
            onClick={choiceClick}
          />
          <img src={card.path} alt="back card" className="back" />
        </div>
      </div>
    </>
  );
}
