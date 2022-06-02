import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Card from '../UI/Card';
import './Book.css';

const Books = (props) => {
  const bkList = props;

  return (
    <main className="card-container">
      {
        bkList.bookList.map((item) => (
          <Card
            key={item.id}
            bookList={item}
          />
        ))
      }
    </main>
  );
};

export default Books;
