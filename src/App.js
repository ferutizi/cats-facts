import {useState, useEffect} from 'react';

// - Facts Random: https://catfact.ninja/fact
//- Imagen random: https://cataas.com/cat/says/hello

function App() {
  const [fact, setFact] = useState();
  const [word, setWord] = useState();

  useEffect(() => {
    fetchFact();
  }, []);

  useEffect((word) => {
    fetchCat(word);
  }, [word]);

  const fetchFact = async () => {
    const res = await fetch('https://catfact.ninja/fact')
    const data = await res.json();
    setFact(data.fact);
    setWord(data.fact.split(' ', 1)[0])
  } 

  const fetchCat = async (word) => {
    const res = await fetch(`https://cataas.com/cat/says/${word}`)
    console.log(res);
    
  }

  console.log(word);
  
  
  return (
    <>
      <h1>About Cats</h1>
      {fact && 
      <p>{fact}</p>
    }
    </>
  );
}

export default App;
