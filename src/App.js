import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList className="movie-list" />
      </div>
    );
  }
}

export default App;
