import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (newBudget>20000){  
            alert("The value cannot exceed upper limit of 20000");
            setNewBudget(20000)
        }
        else if (totalExpenses>newBudget){
            alert("You cannot reduce budget value lower than spending");
            setNewBudget(totalExpenses)
        }
        else{setNewBudget(event.target.value);}        
        }
    return (
<div className='alert alert-secondary'>
<span>Budget:{budget} £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
