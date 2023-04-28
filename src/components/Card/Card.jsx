import "./Card.css";

export default function Card({card, chooseChoice, flip}) {

	const choiceClick =() => {
		chooseChoice()
	}
  return (
    <>
      <div className="card">
        <div className={flip ? "flip" : ""}>
          <img src={card.path} alt="front card" className="front" />
          <img src={card.path} alt="back card" className="back" />
        </div>
      </div>
    </>
  );
}
