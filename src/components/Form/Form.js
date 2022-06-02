import './Form.css';

const Form = () => (
  <form className="d-flex justify-content-between">
    <input className="input-title" placeholder="Book title" />
    <select className="category">
      <option defaultValue={' '}>Category</option>
      {' '}
    </select>
    <button className="submit" type="submit">SUBMIT</button>
  </form>
);

export default Form;
