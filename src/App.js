import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ data } />
        <Footer />
      </div>
    );
  }
}

export default App;
