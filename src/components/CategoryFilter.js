import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../constants';

const CategoryFilter = ({
  filter,
  handleFilterSelect,
}) => {
  let allCategories = [filter, 'Categories', ...categories];
  allCategories = [...new Set(allCategories)];

  return (
    <select onChange={event => { handleFilterSelect(event.target.value); }}>
      {
        allCategories.map(category => (
          <option key={Math.floor(Math.random() * 999999)} value={category}>{category}</option>
        ))
      }
    </select>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterSelect: PropTypes.func.isRequired,
};

export default CategoryFilter;
