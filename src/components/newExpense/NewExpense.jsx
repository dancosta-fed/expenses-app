import React from "react";
import '../css/NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

/* 'onSaveExpenseData' could be name however I wanted. By convetion, it starts with 'on' so we know the value of that should be a function */
export default NewExpense

