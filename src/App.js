import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
    </div>
  );
}

export default App;
