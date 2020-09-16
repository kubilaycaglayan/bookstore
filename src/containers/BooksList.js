import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => dispatch(removeBook(book))
});

const BooksList = props => {
  const { books, handleRemoveBook } = props;

  return (
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
          books.map(book => <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />)
        }
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
