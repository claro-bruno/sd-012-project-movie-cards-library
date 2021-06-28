import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import Rating from './components/Rating';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      {/* <Rating /> */}
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪 */}
    </div>
  );
}

export default App;
