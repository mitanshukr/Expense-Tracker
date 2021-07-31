import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2020");

  const filterChangeHandler = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterValue}
        onFilterChange={filterChangeHandler}
      />
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
