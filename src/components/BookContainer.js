import Books from './Books';

function BookContainer() {
  const bookList = [
    {
      title: 'Hunger Games',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <div className="col-11">
      <Books bookList={bookList} />
    </div>
  );
}

export default BookContainer;
