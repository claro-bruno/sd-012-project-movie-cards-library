import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Header />
        <MovieList movies={ movies } />
      </div>
    );
  }// I already have done this one before: https://github.com/tryber/sd-011-project-movie-cards-library/pull/175
}

export default App;
