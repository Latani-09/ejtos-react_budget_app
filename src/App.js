import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('£'); // Default currency is USD

    // Function to handle currency change
    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    };
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                   <div className='col-sm'>
                        <label for="currencyDropdown">Select Currency:</label>
                        <select id="currencyDropdown" 
                        value={selectedCurrency}
                        onChange={handleCurrencyChange}
                        class="form-select">
                            <option value="$">$ Dollar</option>
                            <option value="£">£ Pound</option>
                            <option value="₹">₹ Rupee</option>
                            <option value="€">€ Euro</option>
                        </select>
                    </div>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget selectedCurrency={selectedCurrency} />
                    </div>
                    <div className='col-sm'>
                        <Remaining selectedCurrency={selectedCurrency} />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal selectedCurrency={selectedCurrency}/>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList selectedCurrency={selectedCurrency}/>
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm selectedCurrency={selectedCurrency}/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
