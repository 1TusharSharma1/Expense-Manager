import "./NewExpense.css";
import FORMMMM from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };


  return (
    <div className="new-expense">
        <FORMMMM onSaveExpenseData = {onSaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;