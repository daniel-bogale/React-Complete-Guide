import Expense from "./component/Expenses/Expense";
import NewExpense from "./component/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const dummyExpense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, addNewExpense] = useState(dummyExpense);

  const addExpenseHandler = (expense) => {
    expense.date = new Date(expense.date);
    
    addNewExpense((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
