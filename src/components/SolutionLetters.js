import '../styles/components/Letters.scss';
function SolutionLetters(props) {
  const renderSolutionLetters = () => {
    const wordLetters = props.word.split('');
    return wordLetters.map((wordletter, index) => {
      if (props.userLetters.includes(wordletter)) {
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
