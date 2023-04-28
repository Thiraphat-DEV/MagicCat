import "./Card.css";

export default function Card({card, chooseChoice}) {

	const choiceClick =() => {
		chooseChoice()
	}
  return (
    <>
      <div className="card">
        <>
          <img src={card.path} alt="front card" className="front" />
          <img src={card.path} alt="back card" className="back" />
        </>
      </div>
    </>
  );
}
