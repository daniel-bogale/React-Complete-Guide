import styles from "./Form.module.css";
import Buttons from "../UI/Buttons/Buttons";
import { useState } from "react";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setAge] = useState("");

  const setUserNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const setAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onUserAdded({
      name: userName,
      age: userAge,
      id: Math.floor(Math.random() * 100),
    });
    setAge("");
    setUserName("");
  };
  return (
    <form
      action=""
      className={styles["form-container"]}
      onSubmit={submitHandler}
    >
      <label>Username</label>
      <input type="text" value={userName} onChange={setUserNameHandler} />
      <label>Age (Years)</label>
      <input type="number" value={userAge} onChange={setAgeHandler} />
      <Buttons type="submit">Add User</Buttons>
    </form>
  );
};

export default Form;
