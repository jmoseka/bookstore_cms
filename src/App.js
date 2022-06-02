import BookContainer from './components/Book/BookContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container d-flex flex-column align-items-center">
        <Header />
        <BookContainer />
      </div>
    </div>
  );
}

export default App;
