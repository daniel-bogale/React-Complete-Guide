import { NavLink } from "react-router-dom";
import Classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={Classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={Classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={Classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
