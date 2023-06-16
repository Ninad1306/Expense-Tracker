import React, { useState } from 'react';

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return (
        <div>
            <div>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList item={filteredExpenses}/>
            </div>
        </div>
    )
};

export default Expenses;