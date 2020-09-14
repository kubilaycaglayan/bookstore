import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = () => ({

});

const BooksList = props => {
  const { books } = props;

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>CATEGORY</th>
      </tr>
      {
        books.map(book => <Book key={book.id} book={book} />)
      }
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
