import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctxVal = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctxVal.isLoggedIn && <Login onLogin={ctxVal.loginHandler} />}
        {ctxVal.isLoggedIn && <Home onLogout={ctxVal.logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
