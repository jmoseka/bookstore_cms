import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookContainer from './components/Book/BookContainer';
import Categories from './components/Categories/Categories';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container d-flex flex-column align-items-center">
          <Header />
          <Routes>
            <Route path="/" element={<BookContainer />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
