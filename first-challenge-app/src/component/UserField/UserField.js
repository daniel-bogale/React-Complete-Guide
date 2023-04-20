// import Card from "../UI/Card";
import styles from "./UserField.module.css";

const UserField = (props) => {
  return (
    <div className={styles["user-detail-container"]}>
      <div
        className={styles["user-detail"]}
      >{`${props.value.name} (${props.value.age} years old)`}</div>
    </div>
  );
};

export default UserField;
