import React from "react";
import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date(2022, 9, 6);
    //[9 month will dis[lay 10, 6 date will dispaly 5]
    const expenseTitle='laptop';
    const expenseAmount=40+'k';
  return (
    <div className="expense-item">
      
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
