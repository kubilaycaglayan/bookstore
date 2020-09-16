import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from './CategoryFilter';
import { removeBook } from '../actions';

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => dispatch(removeBook(book)),
});

const BooksList = props => {
  const { books, handleRemoveBook, filter } = props;

  return (
    <>
      <CategoryFilter />
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
