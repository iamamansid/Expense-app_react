import React from "react";
import Expenses from "./Expenses";
import ExpenseItem from "./ExpenseItems";

function ExpensesList(props) {
  let expenseContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }
}
export default ExpensesList;
