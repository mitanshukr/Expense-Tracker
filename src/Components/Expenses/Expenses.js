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
      <ExpenseItem
        name={props.items[0].name}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        name={props.items[1].name}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        name={props.items[2].name}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        name={props.items[3].name}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
