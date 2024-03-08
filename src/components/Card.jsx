import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

const Card = ( {card} ) => {

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prevState) => !prevState)
  }

  return ( 
    <div className={"card " + card.difficulty} onClick={handleClick}>
      { flipped ? <Answer answer={card.answer} image={card.image}/> : <Question question={card.question} />}
    </div>
   );
}
 
export default Card;