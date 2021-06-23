import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <div className="movie-card-header">
        <Header />
      </div>
      <main className="main">
        <MovieList movies={ movies } />
      </main>
    </div>
  );
}

export default App;
