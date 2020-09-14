import React from 'react';
import { connect } from 'react-redux';
import { categories } from '../constants';

const BooksForm = () => (
  <form>
    <input />
    <select>
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

export default connect(
  null,
  null,
)(BooksForm);