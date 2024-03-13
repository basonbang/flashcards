import { useState } from 'react'
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import NextButton from "./components/NextButton.jsx";
import PrevButton from "./components/PrevButton.jsx";
import { flashcardSet } from './data.js';
import './App.css'

function App() {

  const getNextCard = () => {
    let randomNumber = Math.floor(Math.random() * 10);  

    setPrevCards([...prevCards, currentCard]) // add current card to prevCard array
    setCurrentCard(flashcardSet[randomNumber]); // set current card to random index     
  }

  const getPrevCard = () => {
    const newPrevCard = prevCards.slice(0, prevCards.length - 1);
    const lastCard = prevCards[prevCards.length - 1];

    setPrevCards(newPrevCard); // remove last card from previous card array
    setCurrentCard(lastCard);  // set current card to the one behind it
  }

  const [currentCard, setCurrentCard] = useState({ question: "Start!", answer: "Press the next button!"});
  const [prevCards, setPrevCards] = useState([]);
  const count = flashcardSet.length;

  return (
    <div className='App'>
      <Header count={count}/>
      <Card card={currentCard}/>
      <NextButton onClick={getNextCard}/>
      <PrevButton onClick={getPrevCard} prevCards={prevCards}/>
    </div>
  )

    
}

export default App
