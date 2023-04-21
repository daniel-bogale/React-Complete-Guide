import styles from "./Form.module.css";
import Buttons from "../UI/Buttons/Buttons";
import Card from "../UI/Card/Card";
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
      id: Math.random().toString(),
    });
    setAge("");
    setUserName("");
  };
  return (
    <Card className={styles["form-container"]}>
      <form action="" onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" value={userName} onChange={setUserNameHandler} />
        <label>Age (Years)</label>
        <input type="number" value={userAge} onChange={setAgeHandler} />
        <Buttons type="submit">Add User</Buttons>
      </form>
    </Card>
  );
};

export default Form;
