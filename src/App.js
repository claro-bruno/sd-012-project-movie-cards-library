import './App.css';
import React from 'react';
import Header from './components/Header';
import data from './data';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <MovieList movies={ data } />
      </section>
    );
  }
}

export default App;
