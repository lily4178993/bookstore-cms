import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import categoryListData from '../constants/categoryListData';
import initialBooksData from '../constants/initialBooksData';
import { BookList } from '../components';

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
  const [books, setBooks] = useState(initialBooksData);

  // Use localStorage to get or set the selected category
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    // If it's not in localStorage, use the URL parameter
    return storedCategory || selectedCategoryParam || 'All';
  });

  useEffect(() => {
    // Store the selected category in localStorage
    localStorage.setItem('selectedCategory', selectedCategory);

    /**
     * Filtered list of books based on the selected category.
     * @type {Object[]}
     * @property {string} id - The unique identifier of the book.
     * @property {string} title - The title of the book.
     * @property {string} category - The category of the book.
     */
    const filteredBooks = selectedCategory === 'All'
      ? initialBooksData
      : initialBooksData.filter((book) => book.category === selectedCategory);

    setBooks(filteredBooks);
  }, [selectedCategory]);

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <section className="min-h-[100vh] flex gap-2">
      <aside className="w-fit shadow-inner">
        <ul>
          {categoryListData.map((categoryElement) => (
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
        {books && books.length !== 0 ? (
          <BookList
            books={books}
            deleteBook={deleteBook}
          />
        ) : (
          'No books'
        )}
      </div>
    </section>
  );
};

export default Categories;
