import React from 'react';
import './App.css';
import catalog from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <main>
      <Header />
      <MovieList movie={ catalog[0] } />
      <MovieList movie={ catalog[1] } />
      <MovieList movie={ catalog[2] } />
      <MovieList movie={ catalog[3] } />
      <MovieList movie={ catalog[4] } />
      <div className="App" />
    </main>
  );
}

export default App;
