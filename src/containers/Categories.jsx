import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { BooksItem, LoadingBar } from '../components';
import { selectCategory } from '../redux/categories/categoriesSlice';
import { fetchBooks } from '../redux/books/booksSlice';
import errorImage from '../assets/images/error.jpeg';

const Categories = () => {
  const location = useLocation();
  const { pathname } = location;
  const selectedCategoryParam = pathname.replace('/categories/', '');

  const { categories: categoryOptions } = useSelector((state) => state.categories);
  const { filteredBooks, loading, error } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to filter books by category
    dispatch(selectCategory(selectedCategoryParam));
    dispatch(fetchBooks());
  }, [dispatch, selectedCategoryParam]);

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-ternary">
      <nav className="bg-slate-200">
        <ul className="flex items-center overflow-x-auto overflow-y-hidden w-screen">
          {categoryOptions.map((categoryElement) => (
            <li key={categoryElement} className="ml-2">
              <Link
                to={`/categories/${categoryElement}`}
                className={`px-3 py-1 ${
                  selectedCategoryParam === categoryElement ? 'text-white bg-slate-500' : ''
                }`}
              >
                {categoryElement}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-4 py-8 md:px-10 md:py-10 xl:px-[8%]">
        {
        loading && (
        <div className={`loading-bar ${loading ? 'visible' : 'hidden'}`}>
          <LoadingBar />
        </div>
        )
      }
        {filteredBooks && filteredBooks.length !== 0 ? (
          filteredBooks.map((book) => (
            <BooksItem
              key={book.item_id}
              bookKey={book.item_id}
              author={book.author}
              category={book.category}
              title={book.title}
            />
          ))
        ) : (
          <div className="text-center mt-10">
            <p>No books available for this category.</p>
          </div>
        )}
        {error && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-ternary bg-errorColor">
          <img src={errorImage} alt="error" className="max-h-96" />
          <p>
            <p className="text-2xl font-bold xl:text-4xl">Error when fetching data.</p>
            <br />
            <br />
            <span className="font-bold xl:text-3xl">Try:</span>
            <ul className="flex flex-col justify-start items-start list-disc xl:text-2xl">
              <li>Checking your network cables, modem, and routers</li>
              <li>Reconnecting to your wireless network</li>
            </ul>
          </p>
        </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
