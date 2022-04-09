import './ExpenseItem.css'

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 4, 9)
  const expeneseTitle = 'Car Insurance'
  const expenseAmount = 204.67

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expeneseTitle}</h2>
      </div>
      <div className='expense-item__price'>${expenseAmount}</div>
    </div>
  );
};

export default ExpenseItem;
