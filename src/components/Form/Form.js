import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const book = useSelector((state) => state.bookReducer.book);
  const dispatch = useDispatch();
  console.log(book);

  return (
    <form className="d-flex justify-content-between">
      <input className="input-title" placeholder="Book title" />
      <select className="category">
        <option defaultValue={' '}>Category</option>
        {' '}
      </select>
      <button
        className="submit"
        type="submit"
        onClick={() => dispatch(addBook(book))}
      >
        SUBMIT

      </button>
    </form>
  );
};

export default Form;
