import {useState, useEffect} from 'react';

// - Facts Random: https://catfact.ninja/fact
//- Imagen random: https://cataas.com/cat/says/hello

function App() {
  const [fact, setFact] = useState();
  const [url, setUrl] = useState();

  
  useEffect(() => {
    const fetchFact = async () => {
      const res = await fetch('https://catfact.ninja/fact');
      const data = await res.json();
      setFact(data.fact);
    } 
    fetchFact();
  }, [])
  
  useEffect(() => {
    if (!fact) return;
    const word = fact.split(' ', 1)[0];

    const fetchCat = async () => {
      const res = await fetch(`https://cataas.com/cat/says/${word}}`)
      setUrl(res.url)
    }
    fetchCat();
  }, [fact]);
  
  
  
  return (
    <>
      <h1>About Cats</h1>
      {fact && 
      <>
        <p>{fact}</p>
        <img src={url}></img>
      </>
    }
    </>
  );
}

export default App;
