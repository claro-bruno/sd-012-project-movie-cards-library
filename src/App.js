import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const fakeArr = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <Header />
      <MovieList movies={fakeArr} />
    </div>
  );
}

export default App;
