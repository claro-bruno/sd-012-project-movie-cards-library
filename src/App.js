import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLIst from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLIst />
    </div>
  );
}

export default App;
