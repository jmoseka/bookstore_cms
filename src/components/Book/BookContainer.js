import Books from './Books';
import Form from '../Form/Form';

function BookContainer() {
  const bookList = [
    {
      id: 1,
      title: 'Hunger Games',
      author: 'Suzanne Collins',
    },

    {
      id: 2,
      title: 'Gone Girl',
      author: 'Gillian Flynn',
    },
  ];

  return (
    <div className="col-11">
      <main className="card-container" />
      <Books bookList={bookList} />
      <div className="hz-line my-5" />
      <h5>ADD NEW BOOK</h5>
      <Form />
    </div>
  );
}

export default BookContainer;
