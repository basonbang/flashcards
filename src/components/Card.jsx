import { useState } from "react";

const Card = ( {card} ) => {

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prevState) => !prevState)
  }

  return ( 
    <div className="card" onClick={handleClick}>
      { flipped ? card.answer : card.question }
    </div>
   );
}
 
export default Card;