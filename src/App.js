import './App.css'
import { useState, useEffect } from 'react'

function App () {
  const [fact, setFact] = useState()
  const [url, setUrl] = useState()

  useEffect(() => {
    fetchFact()
  }, [])

  const fetchFact = async () => {
    const res = await fetch('https://catfact.ninja/fact')
    const data = await res.json()
    setFact(data.fact)
  }

  useEffect(() => {
    if (!fact) return
    const word = fact.split(' ', 1)[0]

    const fetchCat = async () => {
      const res = await fetch(`https://cataas.com/cat/says/${word}}`)
      setUrl(res.url)
    }
    fetchCat()
  }, [fact])

  return (
    <main className='main'>
      <h1 className='title'>About Cats</h1>
      <div className='container'>
        {fact &&
          <div className='container--box'>
            <button type='button' className='button' onClick={() => fetchFact()}>New Fact</button>
            <p className='cat--description'>{fact}</p>
          </div>}
        {url &&
          <div className='container--box'>
            <img className='cat--image' src={url} alt='cat' />
          </div>}
      </div>
    </main>
  )
}

export default App
