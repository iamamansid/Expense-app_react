import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [addExpense, setAddExpense] = useState(false);
  function SaveExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  }
  function addExpenseHandler() {
    setAddExpense(true);
  }
  function cancelHandler() {
    setAddExpense(false);
  }
  return (
    <div className="new-expense">
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseData}
          onCancel={cancelHandler}
        />
      )}
      {!addExpense && <button onClick={addExpenseHandler}>Add Expense</button>}
    </div>
  );
}

export default NewExpense;
