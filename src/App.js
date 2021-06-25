import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;

/* Credito: Tarefa realizada com ajuda da monitoria de [Leticia-Cardoso], code-review de [Henrique-Jensen] e consulta ao repositorio de [Eric-Kreis]
[https://github.com/tryber/sd-012-project-movie-cards-library/tree/eric-kreis-movie-cards-library] */
