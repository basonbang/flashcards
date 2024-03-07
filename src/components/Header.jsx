const Header = ( { count }) => {
  return ( 
    <header className="header">
      <h1> CantoCards </h1>
      <h2> Dive into Cantonese with interactive flashcards, perfect for all learning levels.</h2>
      <p> Number of Cards: {count} </p>
    </header>
   );
}
 
export default Header;