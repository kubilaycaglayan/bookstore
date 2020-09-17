import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions';

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleFilterSelect: filter => dispatch(changeFilter(filter)),
});

const NavBar = ({
  handleFilterSelect,
  filter,
}) => (
  <>
    <div className="Bookstore-CMS">
      Bookstore CMS
    </div>
    <div className="BOOKS">
      BOOKS
    </div>
    <div className="CATEGORIES">
      <CategoryFilter filter={filter} handleFilterSelect={handleFilterSelect} />
    </div>
    <div className="Oval">
      <i class="fas fa-user"></i>
    </div>
  </>
);

NavBar.propTypes = {
  handleFilterSelect: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
