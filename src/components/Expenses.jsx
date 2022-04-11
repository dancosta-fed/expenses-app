import React, { useState } from 'react';
import './css/Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from './Card'
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHanlder = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHanlder}/>
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            ))}

      </Card>
    </div>
  )
}

export default Expenses
