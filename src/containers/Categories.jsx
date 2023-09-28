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
  const { category: selectedCategoryParam } = useParams();
  const [books, setBooks] = useState(initialBooksData);
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryParam || 'All');

  useEffect(() => {
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
