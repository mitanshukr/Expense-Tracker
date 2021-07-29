import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      name: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", name: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      name: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      name: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        name={expenses[0].name}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        name={expenses[1].name}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        name={expenses[2].name}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        name={expenses[3].name}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
