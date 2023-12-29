import { useState } from 'react';
import './App.css';
import useSearch from './hooks/useSearch';

function App() {
  let[search, setSearch] = useState('');
let [valids, setValid] = useState("")

  const handleSearchChange = (e) => {
    search = e.target.value;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!definition.valid) {
      setValid("The word you searched is not available")
    }
    else{
      setValid("")
    }
     setSearch(search);
  };
  const definition = useSearch(search);
 
  
  

  return (
    <>
      <h1>Dictionary</h1>
      
        <input
          type="search"
          onChange={handleSearchChange}
          placeholder="Enter a word..."
        />
        <br />
       <button onClick={handleSearchSubmit}>Search</button>

        <div>
          <h2>Search Results</h2>
          
        <h1>{definition.word}</h1>
          <h3>{definition.definition}</h3>

        <h4>{valids}</h4>
          
        </div>
      
    </>
  );
}

export default App;
