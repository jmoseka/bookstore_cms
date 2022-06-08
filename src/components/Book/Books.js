import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import Card from '../UI/Card';

const Books = (props) => {
  const bkList = props;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <main className="card-container">
      {
        bkList.bookList.map((item) => (
          <Card
            key={item.id}
            bookList={item}
            handleRemove={() => handleRemove(item.id)}
          />
        ))
      }
    </main>
  );
};

export default Books;
