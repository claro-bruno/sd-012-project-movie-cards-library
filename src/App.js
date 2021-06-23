import React from 'react';
import './App.css';
import Header from './components/Header';
import MoveList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MoveList movies={ movies } />
    </div>
  );
}

export default App;
