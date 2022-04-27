import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getWordFromApi from '../services/fetch';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';

function App() {
  //const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  useEffect(() => {
    getWordFromApi().then((data) => setWord(data));
  }, []);

  const calculateErorNumber = () => {
    const wordLetters = word.split('');
    const errorLetters = userLetters.filter(
      (eachLetter) => !wordLetters.includes(eachLetter)
    );
    console.log(errorLetters.length);
    if (errorLetters.length <= 13) {
      return errorLetters.length;
    }
  };
  const endGame = () => {
    const wordLetters = word.split('');
    const correctLetters = wordLetters.filter((eachLetter) =>
      userLetters.includes(eachLetter)
    );
    const errorLetters = userLetters.filter(
      (eachLetter) => !wordLetters.includes(eachLetter)
    );
    if (correctLetters.length === wordLetters.length) {
      return (
        <section className='end'>
          <p className='end__message'>¡Has ganado!</p>
        </section>
      );
    }
    if (errorLetters.length === 13) {
      return (
        <section className='end'>
          <p className='end__message'>¡Has perdido! La solución era {word}</p>
        </section>
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleInput = (event) => {
    const inputValue = event.currentTarget.value;
    const regex = new RegExp('^[a-zA-Z\u00C0-\u00FF]*$');
    if (regex.test(inputValue)) {
      setLastLetter(inputValue);
      if (inputValue !== '') {
        setUserLetters([...userLetters, inputValue]);
      }
    }
  };
  {
    /*const handleButton = (event) => {
    event.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  };*/
  }
  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters word={word} userLetters={userLetters} />

          <form className='form' onSubmit={handleSubmit}>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              onChange={handleInput}
              value={lastLetter}
            />
          </form>
        </section>
        <Dummy numberOfErrors={calculateErorNumber()} />
        {endGame()}
        {/*<form action=''>
          <button onClick={handleButton}>Incrementar</button>
  </form>*/}
      </main>
    </div>
  );
}

export default App;
