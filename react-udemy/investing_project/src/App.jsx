import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import { useState } from 'react';


function App() {

  let [investmentData, setInvestmentData] = useState([]);

  function handleCalculateInvestment() {
    let initialInvestment = document.getElementById('initial-investment').value;
    let annualInvestment = document.getElementById('annual-investment').value;
    let expectedReturn = document.getElementById('expected-return').value;
    let duration = document.getElementById('duration').value;
    setInvestmentData([initialInvestment, annualInvestment, expectedReturn, duration]);
  }


  return (
    <>
    <Header/>
    <UserInput onCalculate={handleCalculateInvestment} investmentData={investmentData} />
     <Result investmentData={investmentData} />
    </>
  );
}

export default App
