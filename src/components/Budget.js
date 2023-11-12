import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = (props) => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses} = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const updatedBudget = parseFloat(event.target.value);
    
        if (updatedBudget > 20000) {
            alert("The value cannot exceed the upper limit of 20000");
            setNewBudget(20000);
        } else if (totalExpenses > updatedBudget) {
            alert("You cannot reduce the budget value lower than spending");
            setNewBudget(totalExpenses);
        } else {
            setNewBudget(updatedBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: updatedBudget
            });
        }
    };
           
        
    return (
<div className='alert alert-secondary'>
<span>Budget:{budget} {props.selectedCurrency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
