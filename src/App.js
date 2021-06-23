import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />      
      
      <MovieList class ="movie-list" movies={ movieData }/>
          
  </div>
  );
}

export default App;
