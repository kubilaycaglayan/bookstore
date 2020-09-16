import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions';

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => dispatch(removeBook(book)),
  handleFilterSelect: filter => dispatch(changeFilter(filter)),
});

const BooksList = props => {
  const {
    books, handleRemoveBook, filter, handleFilterSelect,
  } = props;

  return (
    <>
      <CategoryFilter filter={filter} handleFilterSelect={handleFilterSelect} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {
            books
              .filter(book => (book.category === filter || filter === 'All'))
              .map(book => <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />)
          }
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterSelect: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
