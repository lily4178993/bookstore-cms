import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { filteredBooksByCategory } from '../redux/books/booksSlice';
import categoryListData from '../constants/categoryListData';
import { BookList, Menu } from '../components';

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
  const { filteredBooks } = useSelector((state) => state.books);
  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoryParam || 'All',
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredBooksByCategory(selectedCategory));
  }, [dispatch, selectedCategory]);

  return (
    <section className="min-h-[100vh] flex gap-2">
      <aside className="w-fit shadow-inner">
        <Link
          to="/categories/All"
          className={`px-3 py-1 ${
            selectedCategory === 'All' ? 'font-bold' : ''
          }`}
        >
          All
        </Link>
        {categoryListData.map((categoryElement) => (
          <Menu
            key={categoryElement}
            menuLinks={[
              { name: categoryElement, path: `/categories/${categoryElement}` },
            ]}
            className={`px-3 py-1 ${
              selectedCategory === categoryElement ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedCategory(categoryElement)}
          />
        ))}
      </aside>
      <div className="w-full bg-slate-300">
        {filteredBooks && filteredBooks.length !== 0 ? (
          <BookList books={filteredBooks} />
        ) : (
          <p>No books available</p>
        )}
      </div>
    </section>
  );
};

export default Categories;
