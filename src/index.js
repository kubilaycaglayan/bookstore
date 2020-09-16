import './styles/style.sass';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';

import reducer from './reducers/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Book1',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Book2',
      category: 'Thriller',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Book3',
      category: 'Sci-fi',
    },
  ],
  filter: 'Categories',
};

const store = createStore(reducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
