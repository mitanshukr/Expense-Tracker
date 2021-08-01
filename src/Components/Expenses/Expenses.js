import { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2021");

  const filterChangeHandler = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterValue}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
