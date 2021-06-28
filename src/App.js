import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Rating from './components/Rating';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
      </div>
    )
  };
}

export default App;
