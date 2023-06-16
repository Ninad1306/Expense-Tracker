import React, {useState} from 'react';

import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Grocery',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Petrol',
    amount: 50.25,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses,setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
