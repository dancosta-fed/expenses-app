import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e0",
    title: "Car Insurance",
    amount: 294.66,
    date: new Date(2022, 4, 9),
  },

  {
    id: "e1",
    title: "Phone Bill",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },

  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Books",
    amount: 150,
    date: new Date(2022, 5, 12),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
