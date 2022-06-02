import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.css';

const Header = () => (
  <header className="d-flex align-items-center col-11">
    <div className="col-4">
      <h1>Bookstore CMS</h1>
    </div>
    <ul className="nav list-unstyled d-flex justify-content-between">
      <li className="pe-4">BOOKS</li>
      <li>CATGORIES</li>
    </ul>
  </header>
);

export default Header;
