import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <div className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          min: "1",
          max: "5",
          step: "1",
          type: "number",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </div>
  );
};

export default MealItemForm;
