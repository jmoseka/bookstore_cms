import React, { useRef } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const titleRef = useRef();
  const authorRef = useRef();
  const catRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postBook({
      item_id: uuidv4(),
      title: titleRef.current.value,
      author: authorRef.current.value,
      category: catRef.current.value,
    }));
    titleRef.current.value = '';
    authorRef.current.value = '';
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="d-flex justify-content-between">
      <input ref={titleRef} className="input-title" placeholder="Book title" />
      <select ref={catRef} className="category">
        <option defaultValue={' '}>Category</option>
        <option value="Action">Action</option>
        <option value="Crime">Crime</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Sci-fi">Sci-Fi</option>
        <option value="Suspense">Suspense</option>
      </select>
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
