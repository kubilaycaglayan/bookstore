import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { categories } from '../constants';
import { changeFilter } from '../actions';

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleFilterSelect: filter => dispatch(changeFilter(filter)),
});

const CategoryFilter = ({
  filter,
  handleFilterSelect,
}) => {
  let allCategories = [filter, 'All', ...categories];
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryFilter);
