import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: rgb(46, 142, 252);
  }
`;
const Header = () => {
  return (
    <header>
      <nav className={css.headerNav}>
        <StyledNavLink className={css.link} to="/">
          Home
        </StyledNavLink>
        <StyledNavLink className={css.link} to="/movies">
          Movies
        </StyledNavLink>
      </nav>
    </header>
  );
};

export default Header;
