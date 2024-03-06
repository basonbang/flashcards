import { useState } from 'react'
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import NextButton from "./components/NextButton.jsx";
import { flashcardSet } from './data.js';
import './App.css'

function App() {

  const getNextCard = () => {
    let randomNumber = Math.floor(Math.random() * 10);

    setCurrentCard(flashcardSet[randomNumber])
  }
  const [currentCard, setCurrentCard] = useState({ question: "Start!"});
  const count = flashcardSet.length;

  return (
    <div className='App'>
      <Header count={count}/>
      <Card card={currentCard} />
      <NextButton onClick={getNextCard}/>
    </div>
  )

    
}

export default App
