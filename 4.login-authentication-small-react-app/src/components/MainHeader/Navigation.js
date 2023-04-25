import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const CtxVal = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {CtxVal.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {CtxVal.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {CtxVal.isLoggedIn && (
          <li>
            <button onClick={CtxVal.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
