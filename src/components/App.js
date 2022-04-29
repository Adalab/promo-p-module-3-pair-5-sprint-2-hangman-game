import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getWordFromApi from '../services/fetch';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Instructions from './Instructions';
import Options from './Options';

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

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <section>
              <SolutionLetters word={word} userLetters={userLetters} />
              <ErrorLetters word={word} userLetters={userLetters} />
              <Form handleFunction={handleInput} lastLetter={lastLetter} />
            </section>
          }
        />
        <Route path='/instructions' element={<Instructions />} />
        <Route path='/options' element={<Options />} />
      </Routes>

      <main className='main'>
        <Dummy numberOfErrors={calculateErorNumber()} />
        {endGame()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
