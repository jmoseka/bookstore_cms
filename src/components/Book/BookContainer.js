import { useSelector } from 'react-redux';
import Books from './Books';
import Form from '../Form/Form';

function BookContainer() {
  const state = useSelector((state) => state.books);

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
