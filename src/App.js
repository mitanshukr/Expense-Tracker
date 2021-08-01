import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    name: "Filpkart Pay Later",
    amount: 934.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", name: "New TV", amount: 23799.49, date: new Date(2021, 4, 23) },
  {
    id: "e3",
    name: "Car Insurance",
    amount: 12064.67,
    date: new Date(2021, 1, 28),
  },
  {
    id: "e4",
    name: "New Desk (Wooden)",
    amount: 8000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevState) => [expenseData, ...prevState]);
  };

  return (
    <div>
      <NewExpense onSubmitExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
