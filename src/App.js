import React from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import arrayMovies from './data';
import './App.css';

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
