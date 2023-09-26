import { Route, Routes } from 'react-router-dom';
import {
  Books, Categories, Footer, Header,
} from './containers';
import categoryListData from './constants/categoryListData';

/**
 * App Component - Represents the main application component.
 *
 * This component configures the application's routes and renders the header, main content,
 * and footer sections. It provides routing for displaying books and categories.
 *
 * @component
 */

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Books />}
            exact
          />
          <Route
            path="/categories/All"
            element={<Categories />}
          />

          {categoryListData && categoryListData.length !== 0
            ? categoryListData.map((categoryElement) => (
              <Route
                key={categoryElement}
                path={`/categories/${categoryElement}`}
                element={<Categories />}
                exact
              />
            ))
            : null}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
