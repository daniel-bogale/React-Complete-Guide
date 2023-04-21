import Card from "../UI/Card/Card";
import styles from "./UserField.module.css";

const UserField = (props) => {
  return (
    <Card>
      <ul className={styles["user-detail-container"]}>
        {props.users.map((user) => {
          return (
            <li
              key={user.id}
              className={styles["user-detail"]}
            >{`${user.name} (${user.age} years old)`}</li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserField;
