import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { AppProvider } from './context/AppContext';
import { Dropdown } from 'react-bootstrap';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('$'); // Default currency is USD
    const [selectedOption ,setSelectedOption]=useState('$ Dollar') // Default currency is USD
    // Function to handle currency change

    const handleOptionSelect = (e) => {
        setSelectedCurrency(e.charAt(0));
        setSelectedOption(e);
    };

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
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
                    <div className="col-sm">
                    <Dropdown onSelect={(key) => handleOptionSelect(key)}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                       Currency( {selectedOption})
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="$ Dollar">$ Dollar</Dropdown.Item>
                        <Dropdown.Item eventKey="£ Pound ">£ Pound </Dropdown.Item>
                        <Dropdown.Item eventKey="₹ Ruppee">₹ Ruppee</Dropdown.Item>
                        <Dropdown.Item eventKey="€ Euro ">€ Euro  </Dropdown.Item>

                    </Dropdown.Menu>
                    </Dropdown>
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
