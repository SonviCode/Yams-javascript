import { NavLink } from "react-router-dom";

const Nav = () => {
  const checkIsActive = ({ isActive }) => {
    return { color: isActive ? "white" : "gray" };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={checkIsActive} to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsActive} to="/description">
            Description
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
