import React, { useRef } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  // const book = useSelector((state) => state.bookReducer.book);
  const dispatch = useDispatch();

  const titleRef = useRef();
  const authorRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(),
      title: titleRef.current.value,
      author: authorRef.current.value,
    }));
    titleRef.current.value = '';
    authorRef.current.value = '';
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="d-flex justify-content-between">
      <input ref={titleRef} className="input-title" placeholder="Book title" />
      <input ref={authorRef} className="input-author" placeholder="Book author" />
      <button
        className="submit"
        type="submit"
      >
        SUBMIT

      </button>
    </form>
  );
};

export default Form;
