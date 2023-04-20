import styles from "./Form.module.css";
import Buttons from "../UI/Buttons/Buttons";
import { useState } from "react";

const Form = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

  const setUserNameHandler = (e) => {
    console.log(username);
    setUserName(e.target.value);
  };
  const setAgeHandler = (e) => {
    console.log(age);
    setAge(e.target.value);
  };

  const addUserClickedHandler = (val) => {
    props.onUserAdded();
  };
  return (
    <form action="" className={styles["form-container"]}>
      <label>Username</label>
      <input type="text" value={username} onChange={setUserNameHandler} />
      <label>Age (Years)</label>
      <input type="text" value={age} onChange={setAgeHandler} />
      <Buttons type="submit" isClicked={addUserClickedHandler}>
        Add User
      </Buttons>
    </form>
  );
};

export default Form;
