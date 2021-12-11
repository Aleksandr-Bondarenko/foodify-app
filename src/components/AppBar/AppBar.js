import { NavLink, useLocation } from "react-router-dom";

function AppBar({ showModal }) {
  const location = useLocation();

  return (
    <>
      <nav>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
            };
          }}
          to="/"
        >
          Random dish
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
            };
          }}
          to="/favorites"
        >
          Favorites
        </NavLink>
      </nav>

      {location.pathname === "/favorites" && (
        <button onClick={showModal} type="button">
          Add custom dish
        </button>
      )}
    </>
  );
}

export default AppBar;
