import { useState } from 'react'
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import NextButton from "./components/NextButton.jsx";
import PrevButton from "./components/PrevButton.jsx";
import UserGuess from './components/UserGuess.jsx';
import { flashcardSet } from './data.js';
import './App.css'

function App() {

  const [currentCard, setCurrentCard] = useState({ question: "Start!", answer: "Press the next button!", difficulty: "start"});
  const [prevCards, setPrevCards] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const count = flashcardSet.length;

  const getNextCard = () => {
    let randomNumber = Math.floor(Math.random() * 10);  

    setFlipped(false);
    setGuess("");
    setPrevCards([...prevCards, currentCard]) // add current card to prevCard array
    setCurrentCard(flashcardSet[randomNumber]); // set current card to random index     
  }

  const getPrevCard = () => {
    const newPrevCard = prevCards.slice(0, prevCards.length - 1);
    const lastCard = prevCards[prevCards.length - 1];

    setFlipped(false);
    setGuess("");
    setPrevCards(newPrevCard); // remove last card from previous card array
    setCurrentCard(lastCard);  // set current card to the one behind it
  }

  const handleFlip = () => {
    setFlipped((prevState) => !prevState)
  }

  const submitGuess = (result) => {
    setGuess(result);
  }

  const handleStreak = (result) => {
    if (result === 1) {
      // First correct guess, ensure both streak and longestStreak are incremented
      if (longestStreak === 0) {
        setStreak(1);
        setLongestStreak(1);
      } else if (streak >= longestStreak){
        setLongestStreak(streak + 1);
        setStreak((prevState) => prevState + 1);
      } else {
        setStreak((prevState) => prevState + 1);
      }

      console.log("Streak: " + streak);
      console.log("Longest streak: " + longestStreak);
      
    } else {
      setStreak(0);
    }
  }


  return (
    <div className='App'>
      <Header count={count} streak={streak} longestStreak={longestStreak}/>
      <Card card={currentCard} flipped={flipped} handleFlip={handleFlip}/>

      {/** Don't render the UserGuess component if we're on the Start card */}
      {(currentCard.difficulty !== 'start') && 
      <UserGuess key={currentCard.id} card={currentCard} guessResult={guess} submitGuess={submitGuess} handleStreak={handleStreak}/>}

      <div className='buttons-container'>
        <NextButton onClick={getNextCard}/>
        <PrevButton onClick={getPrevCard} prevCards={prevCards}/>
      </div>
    </div>
  )

    
}

export default App
