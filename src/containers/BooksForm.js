import React from 'react';
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
  let state;

  const initialState = {
    title: '',
    category: categories[0],
  };

  const setState = newState => {
    state = {
      ...state,
      ...newState,
    };
  };

  setState(initialState);

  const handleInputChange = event => {
    setState({
      title: event.target.value,
    });
  };

  const handleSelectChange = event => {
    setState({
      category: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (document.getElementById('title').value === '') return;
    createBook({
      ...state,
      id: Math.floor(Math.random() * 999999),
    });
    setState({});
    document.getElementById('title').value = initialState.title;
    document.getElementById('category').value = initialState.category;
  };

  return (
    <form>
      <input id="title" onChange={handleInputChange} />
      <select id="category" onChange={handleSelectChange}>
        {
            categories.map((category, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={category}>{category}</option>
            ))
          }
      </select>
      <button onClick={handleSubmit} type="button">Add Book</button>
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
