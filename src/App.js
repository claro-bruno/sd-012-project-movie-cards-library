import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MovieList AllMovies={movies} /> */}
    </div>
  );
}

export default App;
