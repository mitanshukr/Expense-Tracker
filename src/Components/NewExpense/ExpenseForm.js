import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInputs, setUserInputs] = useState({
    enteredName: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const nameInputHandler = (event) => {
    setUserInputs((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
  };

  const amountInputHandler = (event) => {
    setUserInputs((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateInputHandler = (event) => {
    setUserInputs((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredExpense = {
      name: userInputs.enteredName,
      amount: userInputs.enteredAmount,
      date: userInputs.enteredDate,
    };
    props.onSaveExpense(enteredExpense);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input
            type="text"
            value={userInputs.enteredName}
            onChange={nameInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInputs.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInputs.enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
