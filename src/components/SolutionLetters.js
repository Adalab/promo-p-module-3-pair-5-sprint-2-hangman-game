import '../styles/components/Letters.scss';
function SolutionLetters({word, userLetters}) {
  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((wordletter, index) => {
      if (userLetters.includes(wordletter)) {
        return (
          <li className='letter' key={index}>
            {wordletter}
          </li>
        );
      } else {
        return <li className='letter' key={index}></li>;
      }
    });
  };
  return (
    <div className='solution'>
      <h2 className='title'>Solución:</h2>
      <ul className='letters'>{renderSolutionLetters()}</ul>
    </div>
  );
}
export default SolutionLetters;
