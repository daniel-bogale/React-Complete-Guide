import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredexpenseData) => {
    const expenseData = {
      ...enteredexpenseData,
      id: Math.random().toString(),
    };

    props.addExpense(expenseData);
  };

  const [formIsNeeded, displayForm] = useState(false);

  const cancelHandler = () => {
    displayForm(false);
  };

  const addNewExpenseButtonHandler = () => {
    displayForm(true);
  };

  if (!formIsNeeded) {
    return (
      <div className="new-expense">
        <button onClick={addNewExpenseButtonHandler}>Add new Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onCancel={cancelHandler}
        saveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
