import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logoutHandler: () => {},
  loginHandler: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  useEffect(() => {
    const storedLoggedInVal = localStorage.getItem("isLoggedIn");
    if (storedLoggedInVal === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "0");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        logoutHandler: logoutHandler,
        loginHandler: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
