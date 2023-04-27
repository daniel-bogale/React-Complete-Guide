import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const ctxVal = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctxVal.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxVal.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxVal.isLoggedIn && (
          <li>
            <button onClick={ctxVal.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
