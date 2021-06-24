import React from 'react';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <section className="App">
      <Header />
      <MovieList movies={ movies } />
    </section>
  );
}

export default App;
