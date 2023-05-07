import css from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  // const navigate = useNavigate();
  return (
    <header>
      <nav className={css.nav_1}>
        <Link to="/">Homepage</Link>
        <div className={css.border}></div>
        <Link to="/movies">Movies</Link>
      </nav>
      {/* <nav className={css.nav_2}>
          <button type="button" onClick={() => navigate(-1)}>
              Go back
          </button>
        </nav> */}
    </header>
  );
};

export default Header;
