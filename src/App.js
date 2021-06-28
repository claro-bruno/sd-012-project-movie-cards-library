import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import catalog from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ catalog } />
      </div>
    );
  }
}

export default App;
