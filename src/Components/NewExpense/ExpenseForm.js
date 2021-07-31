import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInputs, setUserInputs] = useState({
    enteredName: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const [formStatus, setFormStatus] = useState(false);

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
      date: new Date(userInputs.enteredDate),
    };
    props.onSaveExpense(enteredExpense);
  };

  const formStatusToggler = () => {
    setFormStatus((prevState) => !prevState);
  };

  const addExpenseBtn = (
    <button onClick={formStatusToggler}>Add Expense</button>
  );

  return (
    <div>
      {formStatus ? (
        <form onSubmit={formSubmitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Name</label>
              <input
                type="text"
                required={true}
                value={userInputs.enteredName}
                onChange={nameInputHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                required={true}
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
                required={true}
                value={userInputs.enteredDate}
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateInputHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={formStatusToggler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        addExpenseBtn
      )}
    </div>
  );
};

export default ExpenseForm;
