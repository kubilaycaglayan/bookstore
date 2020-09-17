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
      title: 'Great Expectations',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Origins',
      category: 'Thriller',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Artemis Fowl',
      category: 'Sci-Fi',
    },
  ],
  filter: 'Categories',
};

const store = createStore(reducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
