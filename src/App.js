import React from 'react';
import './App.css';
import movies from './data';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* retornando as informações do componente Header */}
      <Header />
      {/*  */}
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
