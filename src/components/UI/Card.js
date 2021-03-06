import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './Card.css';

const Card = (props) => {
  const prop = props;
  const { bookList, handleRemove } = prop;
  const { title, author, category } = bookList;

  return (
    <div className="card">
      <div className="desc-box">
        <div className="desc">
          <p className="book-category">{category}</p>
          <p className="book-title">{title}</p>
          <p className="book-author">{author}</p>
        </div>

        <div className="desc-option">
          <ul className="list-unstyled d-flex m-0 list-options justify-content-between">
            <li><button type="button">Comments</button></li>
            <li><button type="button" onClick={handleRemove}> Remove </button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
      </div>

      <div className="chapter-box d-flex justify-content-between">
        <div className="progress-container align-self-center d-flex align-items-center justify-content-between">
          <div className="progress-icon">
            <AiOutlineLoading3Quarters />
          </div>

          <div className="percent-info">
            <p className="progress-value">65%</p>
            <p className="progress-completed">Completed</p>
          </div>
        </div>

        <div className="chapter-info d-flex flex-column justify-content-between">
          <div>
            <p className="current-chapter">CURRENT CHAPTER</p>
            <p className="chapter-no">Chapter 17</p>
          </div>
          <button className="updateProgress p-1" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
