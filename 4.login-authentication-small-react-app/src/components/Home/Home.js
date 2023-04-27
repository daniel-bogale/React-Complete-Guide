import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
// import AuthContext from "../../store/auth-context";

const Home = () => {
  const ctxVal = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctxVal.logoutHandler}>Logout</Button>
    </Card>
  );
};

export default Home;
