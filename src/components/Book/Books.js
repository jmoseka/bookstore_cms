import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useDispatch } from 'react-redux';
import { removeSelectedBook } from '../../redux/books/books';
import Card from '../UI/Card';

const Books = (props) => {
  const p = props;
  const bkList = p.bookList;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeSelectedBook(id));
  };

  return (
    <main className="card-container">
      {
        bkList.map((book) => (
          <Card
            key={book.item_id}
            bookList={book}
            handleRemove={() => handleRemove(book.item_id)}
          />
        ))
      }
    </main>
  );
};

export default Books;
