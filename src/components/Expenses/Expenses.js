import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpnenseList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const[filterChanged, setFilterChanaged] = useState('2021');


  const saveSelectOption = (changedValueFromFilter) => {
    setFilterChanaged(changedValueFromFilter) 
  };

  const FilteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filterChanged)

 
  return (
    <li>
    <Card className="expenses">
    <ExpensesFilter selected={filterChanged} onChangedSelect = {saveSelectOption} />
    <ExpnenseList items={FilteredExpenses} />
    </Card>
    </li>
  );
}

export default Expenses;

 {/* {FilteredExpenses.length === 0 ? <p>No Expenses Available Of Year {filterChanged} </p> : FilteredExpenses.map( (expense)  => (<ExpenseItem key={expense.id} title ={expense.title} amount ={expense.amount} date = {expense.date}  />)) } */}
  

   {/* {FilteredExpenses.lenght ===0 && <p>No Expenses Available Of Year {filterChanged} </p> } 
   {FilteredExpenses.lenght > 0 && FilteredExpenses.map( (expense)  => (<ExpenseItem key={expense.id} title ={expense.title} amount ={expense.amount} date = {expense.date}  />)) }  */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}