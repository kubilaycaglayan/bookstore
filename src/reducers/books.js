import { CREATE_BOOK, REMOVE_BOOK } from '../constants';

export const reducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        books: [
          ...state.books,
          action.payload.book
        ]
      };      
    case REMOVE_BOOK:
      return {
        books: state.books.filter(book => book.id !== action.payload.id)
      };
  
    default:
      break;
  }
};
