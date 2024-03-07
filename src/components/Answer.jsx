const Answer = ( {answer, image} ) => {
  return ( 
    <div className="answer">
      <p>{answer}</p>
      {image && <img src={image} alt={answer + " image"} />}
    </div>
   );
}
 
export default Answer;