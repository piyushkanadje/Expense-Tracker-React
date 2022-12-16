import React from 'react' ;
import "./ExpensesList.css";
import ExpenseItem from './ExpenseItem';



const ExpnenseList = (props) => {

   // let expenseContent = <p className='white-text'>No Expenses Available Of Year {filterChanged} </p>;
    if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'> Found No Expense </h2>
    }   

    return (

        <ul className='expenses-list'> 
     {props.items.map( (expense)  => (
      <ExpenseItem 
      key={expense.id} 
      title ={expense.title} 
      amount ={expense.amount} 
      date = {expense.date}  />
      ))} 

    
        
        </ul>
    );
};

export default ExpnenseList;