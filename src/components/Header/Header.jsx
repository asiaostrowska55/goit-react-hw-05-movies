import css from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className={css.headerNav}>
        <Link to="/">Homepage</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  );
};

export default Header;
