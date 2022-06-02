import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Form from './Form';
import './Book.css';

const Books = (props) => {
  console.log(props);

  return (
    <main className="card-container">
      <div className="card">
        <div className="desc-box">
          <div className="desc">
            <p>Action</p>
            <p className="book-title">The Hunger Games</p>
            <p className="book-author">Suzanne Collins</p>
          </div>

          <div className="desc-option">
            <ul className="list-unstyled d-flex m-0 list-options justify-content-between">
              <li>Comments</li>
              <li>Remove</li>
              <li>Edit</li>
            </ul>
          </div>
        </div>

        <div className="chapter-box d-flex justify-content-between">
          <div className="progress-container align-self-center d-flex align-items-center justify-content-between">
            <div className="progress-icon">
              <AiOutlineLoading3Quarters />
            </div>

            <div className="percent-info">
              <p className="progress-value">64%</p>
              <p className="progress-completed">Completed</p>
            </div>
          </div>

          <div className="chapter-info d-flex flex-column justify-content-between">
            <div>
              <p>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
            </div>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
      <div className="hz-line my-5" />
      <h5>ADD NEW BOOK</h5>
      <Form />
    </main>
  );
};

export default Books;
