import React from 'react';
import { connect } from 'react-redux';
import { categories } from '../constants';

const BooksForm = () => {
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
      <button type="button">Add Book</button>
    </form>
  );
};

export default connect(
  null,
  null,
)(BooksForm);
