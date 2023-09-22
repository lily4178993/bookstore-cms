import { Route, Routes } from 'react-router-dom';
import { Categories } from './components';
import { Books, Footer, Header } from './containers';

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
            path="categories"
            element={<Categories />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
