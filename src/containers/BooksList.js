import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
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
    books, handleRemoveBook, filter,
  } = props;

  return (
    <div className="books-list">
      {
        books
          .filter(book => (book.category === filter || filter === 'Categories'))
          .map(book => <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />)
      }
    </div>
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
