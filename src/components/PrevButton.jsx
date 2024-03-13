const PrevButton = ( {onClick, prevCards}) => {
  return ( 
    <button className="prev-button" onClick={onClick} disabled={prevCards.length === 0}>
      ←
    </button>
   );
}
 
export default PrevButton;