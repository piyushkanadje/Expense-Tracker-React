import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
   const [enteredTitle, setEnteredTitle] =  useState('');
   const[enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');
//You can use state as one only

/* 

const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount: ' ',
    enteredDate:'',


});


const titleChaneHandler = (event) => {


setUserInput({

    ...userInput,
    enteredTitle:event.target.value,
});
};


const amountChaneHandler = (event) => {
   setUserInput((prevState) => {
     return {
           ...prevState,
            enteredAmount:event.target.value,
     }
   });
};


*/
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
 
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
     
        };
        const dateChageHandler = (event) => {
            setEnteredDate(event.target.value);
         
            };
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChageHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;