import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import "./ExpensesList.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterExpenseData = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterExpenseData}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 ? (
          <h2 className="expenses-list__fallback">Found no expenses.</h2>
        ) : (
          filteredExpenses.map((expenses) => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
