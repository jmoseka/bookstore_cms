import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Books from './Books';
import Form from '../Form/Form';
import { fetchBook } from '../../redux/books/books';

function BookContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  const books = useSelector((state) => state.books);
  return (
    <div className="col-11">
      <main className="card-container" />
      <Books bookList={books} />
      <div className="hz-line my-5" />
      <h5>ADD NEW BOOK</h5>
      <Form />
    </div>
  );
}

export default BookContainer;
