import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from './reducers/books';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Book1',
      category: 'Action'
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Book2',
      category: 'Thriller'
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Book3',
      category: 'Sci-fi'
    }
  ]
}

const store = createStore(reducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
