import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
      </div>
      <main className='main'>
        <MovieList movies={ movies } />
      </main>
    </div>
  );
}

export default App;
