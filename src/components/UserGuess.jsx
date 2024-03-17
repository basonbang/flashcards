import { useState } from "react";

const UserGuess = ( {card, submitGuess, guessResult, handleStreak}) => {

  const [formData, setFormData] = useState({
    "guess": ""
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const answer = card.answer.replace(/,/g, "").toLowerCase();
    const guess = formData.guess.toLowerCase();

    if (answer.includes(guess)) {
      submitGuess("correct");
      handleStreak(1);
    } else {
      submitGuess("incorrect");
      handleStreak(0);
    }
    
    (answer.includes(guess) ) ? submitGuess("correct") : submitGuess("incorrect")
    
  }
 

  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess"></label>
      <input 
        className={guessResult}
        name="guess" 
        value={formData.guess} 
        onChange={handleChange} 
        type="text" 
        id="guess" 
        placeholder="Enter your guess here!"
      />

      <button>
        Submit
      </button>
    </form>
   );
}
 
export default UserGuess;