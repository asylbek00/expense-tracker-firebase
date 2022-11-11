import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  // console.log(props.title);

  // props = {
  //   title: "Hello",
  //   onAddExpense: function addExpenseHandler() {
  //     console.log(expense);
  //   },
  // };

  const saveExpenseDataHandler = (enteredExpense) => {
    props.onAddExpense(enteredExpense);
  };

  return (
    <section className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        list={props.list}
        setList={props.setList}
      />
    </section>
  );
}

export default NewExpense;
