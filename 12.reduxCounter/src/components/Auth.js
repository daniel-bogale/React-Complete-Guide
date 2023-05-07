import classes from "./Auth.module.css";
import { authActions } from "../store/use-redux";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispath = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispath(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
