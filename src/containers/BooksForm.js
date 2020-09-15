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
  let state = {
    title: '',
    category: '',
  };

  const setState = newState => {
    state = {
      ...state,
      ...newState,
    };
  };

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
    createBook({
      ...state,
      id: Math.floor(Math.random() * 100),
    });
    setState({});
  };

  return (
    <form>
      <input onChange={handleInputChange} />
      <select onChange={handleSelectChange}>
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
