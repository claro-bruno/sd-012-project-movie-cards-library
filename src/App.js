import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import arrayMovies from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList movies={ arrayMovies } />
      </div>
    );
  }
}

export default App;
