import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;

  return (
    <tr>
      <td>
        {id}
      </td>
      <td>
        {title}
      </td>
      <td>
        {category}
      </td>
      <td>
        <button type='button' onClick={() => handleRemoveBook(book)}>Remove Book</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
