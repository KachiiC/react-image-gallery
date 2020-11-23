import React, {useState} from 'react'
// CSS
import "./App.css"
// Components
import ImageGallery from './Components/ImageGallery'


const App = () => {

  const [query, setQuery] = useState(""); 
  const [images, setImages] = useState([]); 
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault();
      fetch(
        `https://pixabay.com/api/?key=18866569-6f34f2906812f25069d16a3da&q=${query}`
      ) 
        .then((response) => response.json())
        .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL)) 
        .then(setImages)
        .then(setShowResults(true));
    };


    return (
        <div className="App">
          <form onSubmit={handleSubmit}>
              <input type="text"
                className="input-form" 
                onChange={(e) => setQuery(e.target.value)} />
              <input 
                type="submit" 
                value="Search"
                className="search-button"
              />
          </form>
          { showResults && (
            <ImageGallery images={images} />
          )}
        </div>
    )
}


export default App