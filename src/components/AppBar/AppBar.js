import { NavLink, useLocation } from "react-router-dom";
import s from "./AppBar.module.css";

import Container from "../Container/Container";

function AppBar({ showModal }) {
  const location = useLocation();

  return (
    <div className={s.appBar}>
      <Container>
        <div className={s.wrap}>
          <nav className={s.nav}>
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              to="/"
            >
              Random dish
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              to="/favorites"
            >
              Favorites
            </NavLink>
          </nav>

          {location.pathname === "/favorites" && (
            <button className={s.btn} onClick={showModal} type="button">
              Add custom dish
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AppBar;
