import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Books from './Books';
import Form from '../Form/Form';
import { fetchBook } from '../../redux/books/books';

function BookContainer() {
  const state = useSelector((state) => state.books);
  const dispatch = useDispatch();
  /* const fetchProducts = async () => {
    const response = await axios
      .get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5YW2OgDLnSBnM7Xf2ZfG/books')
      .catch(() => {});
    dispatch(addBook(response.data));
  }; */

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <div className="col-11">
      <main className="card-container" />
      <Books bookList={state} />
      <div className="hz-line my-5" />
      <h5>ADD NEW BOOK</h5>
      <Form />
    </div>
  );
}

export default BookContainer;
