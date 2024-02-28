import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookForm, BooksItem, LoadingBar } from '../components';
import { fetchBooks } from '../redux/books/booksSlice';
import errorImage from '../assets/images/error.jpeg';

/**
 * Books Component - Represents a collection of books.
 *
 * This component displays a collection of books, allowing users to view and
 * manage the list of books. It includes a BookList component for displaying
 * individual books and a BookForm component for adding new books.
 *
 * @component
 */
const Books = () => {
  const { books, loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks());
    }
  }, [books.length, dispatch]);

  return (
    <section className="h-screen relative px-4 py-8 bg-ternary md:px-10 md:py-10 xl:px-[8%]">
      {
        loading && (
        <div className={`loading-bar ${loading ? 'visible' : 'hidden'}`}>
          <LoadingBar />
        </div>
        )
      }
      <div className="h-[60vh] overflow-x-auto md:h-[70vh]">
        {books && books.length !== 0 && (
          books.map((book) => (
            <BooksItem
              key={book.item_id}
              bookKey={book.item_id}
              author={book.author}
              category={book.category}
              title={book.title}
            />
          ))
        )}
      </div>
      {error && (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-ternary bg-errorColor">
        <img src={errorImage} alt="error" className="max-h-96" />
        <div>
          <p className="text-2xl font-bold xl:text-4xl">Error when fetching data.</p>
          <br />
          <br />
          <span className="font-bold xl:text-3xl">Try:</span>
          <ul className="flex flex-col justify-start items-start list-disc xl:text-2xl">
            <li>Checking your network cables, modem, and routers</li>
            <li>Reconnecting to your wireless network</li>
          </ul>
        </div>
      </div>
      )}
      <BookForm />
    </section>
  );
};

export default Books;
