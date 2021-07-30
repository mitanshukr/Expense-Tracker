import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const addExpenseHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        }
        props.onSubmitExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={addExpenseHandler}/>
        </div>
    )
}

export default NewExpense;