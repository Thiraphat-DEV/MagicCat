import "./Card.css";

// eslint-disable-next-line react/prop-types
export default function Card({ card, chooseChoice, flip, disabled }) {
  const choiceClick = () => {
    // if !disabled then show card choice 👇
    if(!disabled) {
      chooseChoice(card);
    }
  };
  return (
    <>
      <div className="card">
        <div className={flip ? "flip" : ""}>
          <img
            src={card.path}
            alt="front card"
            className="front"
          />
          <img src="src\assets\franky.jpg" onClick={choiceClick} alt="back card" className="back" />
        </div>
      </div>
    </>
  );
}
