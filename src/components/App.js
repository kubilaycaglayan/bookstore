import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import NavBar from './NavBar';

const App = () => (
  <div className="panel-bg">
    <nav>
      <NavBar />
    </nav>
    <main>
      <BooksList />
      <BooksForm />
    </main>
  </div>
);

export default App;
