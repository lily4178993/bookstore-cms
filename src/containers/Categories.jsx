import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { BooksItem } from '../components';
import { selectCategory } from '../redux/categories/categoriesSlice';
import { fetchBooks } from '../redux/books/booksSlice';

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
    <section className="min-h-screen bg-ternary">
      <nav className="bg-slate-200">
        <ul className="flex items-center overflow-y-auto w-screen">
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
        {loading === 'pending' && (<p className="text-center m-10">Loading...</p>)}
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
          <p className="text-center mt-10">No books available for this category.</p>
        )}
        {error && (
        <p className="text-center mt-10">
          Error:
          {' '}
          {error.message}
          <br />
          <br />
          No books available.
        </p>
        )}
      </div>
    </section>
  );
};

export default Categories;
