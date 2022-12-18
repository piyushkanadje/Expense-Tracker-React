import React , { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

const [isEditing , setIsEditiing] = useState(false);

const saveExpenseDataHandler = (entereExpenseData) => {
  
  const expenseData = {
   ...entereExpenseData,
   id: Math.random().toString,
  };

 props.onAddExpense(expenseData);
 setIsEditiing(false);
};

const startEditing = () => {
  setIsEditiing(true);
};

const stopEditingHandler = () => {

  console.log("StopEditing");
  setIsEditiing(false);
};


  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditing}> Add New Expense </button>} 
        {isEditing && 
        <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel ={stopEditingHandler}
        
         />}
      
    </div>
  );
};

export default NewExpense;