import { useRef } from "react";
import classes from "./ProfileForm.module.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const token = useSelector((state) => state.auth.token);
  const newPasswordInputRef = useRef();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBTDnpVOGWV5gP41YUdQK3UDJsH8GSRATw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
      }
    ).then((res) => {
      console.log(res);

      if (!res.ok) {
        console.log(res, "not changed");
      } else {
        history.replace("/");
      }
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPasswordInputRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
