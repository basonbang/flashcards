import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

const Card = ( {card, flipped, handleFlip} ) => {

  return ( 
    <div className={"card " + card.difficulty} onClick={handleFlip}>
      { flipped ? <Answer answer={card.answer} image={card.image}/> : <Question question={card.question} />}
    </div>
   );
}
 
export default Card;