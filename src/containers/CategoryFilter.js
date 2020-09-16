import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { categories } from '../constants';

const CategoryFilter = () => {
  const allCategories = ['All', ...categories];

  return (
    <select>
      {
        allCategories.map(category => {
          return (
            <option key={Math.floor(Math.random() * 1000)} value={category}>{category}</option>
          );
        })
      }
    </select>
  );
};

CategoryFilter.propTypes = {
  null: PropTypes.,
}

export default connect(
  null,
  null,
)(CategoryFilter);
