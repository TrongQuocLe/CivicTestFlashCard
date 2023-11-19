import React, { useState } from 'react';
import './FlipCard.css'; // Import your CSS file

const FlipCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
	<div className="card" >
		<div className={`card__inner ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardClick}>
			<div className="card__face card__face--front">
				<h2>{props.question}</h2>
			</div>
			<div className="card__face card__face--back">
				<div className="card__content">
					<div className="card__header">
						<h2>{props.images}</h2>
					</div>
					<div className="card__body">
						<h3>{props.answer}</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
  	);
  }


export default FlipCard;