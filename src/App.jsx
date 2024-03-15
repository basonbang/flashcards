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


  return (
    <div className='App'>
      <Header count={count}/>
      <Card card={currentCard} flipped={flipped} handleFlip={handleFlip}/>
      <UserGuess card={currentCard} guessResult={guess} submitGuess={submitGuess}/>
      <div className='buttons-container'>
        <NextButton onClick={getNextCard}/>
        <PrevButton onClick={getPrevCard} prevCards={prevCards}/>
      </div>
    </div>
  )

    
}

export default App
