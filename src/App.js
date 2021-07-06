// Creditos ao Lucas Mulato que fez pair programing para me ajudar a fazer o projeto
import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <App>
        <Header />
        <MovieList movies={ movies } />
      </App>
    );
  }
}

export default App;
