const Header = ( { count, streak, longestStreak }) => {
  return ( 
    <header className="header">
      <h1> CantoCards </h1>
      <h2> Dive into Cantonese with interactive flashcards, perfect for all learning levels.</h2>
      <p> Number of Cards: {count} </p>
      <div>
        <p id="streak"> Current Streak: {streak}</p>
        <p id="longest-streak"> Longest Streak: {longestStreak}</p>
      </div>
    </header>
   );
}
 
export default Header;