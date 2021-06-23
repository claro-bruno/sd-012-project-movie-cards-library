import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <footer className="page-footer">
        Desenvolvido por Guilherme Hermenegildo Junior
      </footer>
    </div>
  );
}

export default App;
