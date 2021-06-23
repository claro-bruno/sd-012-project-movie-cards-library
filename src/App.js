import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <MovieList />
      </main>
    );
  }
}

export default App;
