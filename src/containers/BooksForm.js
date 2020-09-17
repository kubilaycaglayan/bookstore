import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { categories } from '../constants';
import { createBook } from '../actions';

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

const BooksForm = ({
  createBook,
}) => {
  const initialState = {
    title: '',
    category: categories[0],
  };

  const [state, setState] = useState(initialState);

  const handleInputChange = event => {
    setState({
      ...state,
      title: event.target.value,
    });
  };

  const handleSelectChange = event => {
    setState({
      ...state,
      category: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.title === '') return;
    createBook({
      ...state,
      id: Math.floor(Math.random() * 100),
    });
    setState({
      title: '',
      category: categories[0],
    });
  };

  return (
    <form className="book-form">
      <input id="title" onChange={handleInputChange} value={state.title} placeholder="Book title" />
      <select value={state.category} id="category" onChange={handleSelectChange}>
        {
            categories.map(category => (
              <option
                className={state.category}
                key={Math.floor(Math.random() * 999999)}
                value={category}
              >
                {category}
              </option>
            ))
          }
      </select>
      <button onClick={handleSubmit} type="button">ADD BOOK</button>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(BooksForm);
