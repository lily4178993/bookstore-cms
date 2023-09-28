import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BooksItem } from '../components';
import { selectCategory } from '../redux/categories/categoriesSlice';

/**
 * Categories Component - Represents a section for displaying categories and books.
 *
 * This component renders a section that displays a list of categories and books. Users
 * can click on a category label to filter and display books of the selected category.
 *
 * @component
 */

const Categories = () => {
  /**
   * React Router useParams hook to extract the 'category' parameter from the URL.
   * @type {Object}
   * @property {string} category - The selected category from the URL parameter.
   */
  const { category: selectedCategoryParam } = useParams();

  const [selectedCategory, setSelectedCategory] = useState(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    return storedCategory || selectedCategoryParam || 'All';
  });
  const { categories: categoryOptions } = useSelector((state) => state.categories);
  const { filteredBooks, loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    // Store the selected category in localStorage
    localStorage.setItem('selectedCategory', selectedCategory);

    // Dispatch the action to filter books by category
    dispatch(selectCategory(selectedCategory));
  }, [dispatch, filteredBooks.length, selectedCategory, selectedCategoryParam]);

  return (
    <section className="min-h-[100vh] flex gap-2">
      <aside className="w-fit shadow-inner">
        <ul>
          {categoryOptions.map((categoryElement) => (
            <li key={categoryElement}>
              <Link
                to={`/categories/${categoryElement}`}
                className={`px-3 py-1 ${
                  selectedCategory === categoryElement ? 'font-bold' : ''
                }`}
                onClick={() => setSelectedCategory(categoryElement)}
              >
                {categoryElement}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-full bg-slate-300">
        {loading === 'pending' && (<p>Loading...</p>)}
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
        ) : (<p>No books available.</p>)}

        {error && (
        <p>
          No books available.
          {' '}
          Error:
          {' '}
          {error.message}
        </p>
        )}
      </div>
    </section>
  );
};

export default Categories;
