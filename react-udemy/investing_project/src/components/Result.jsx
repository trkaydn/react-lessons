import {calculateInvestmentResults , formatter} from '../util/investment.js';

export default function Result({ investmentData }) {

    let calculatedData = null;
    let initialInvestment = investmentData[0];
    let annualInvestment = investmentData[1];
    let expectedReturn = investmentData[2];
    let duration = investmentData[3];

    calculatedData = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration});

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>

                {calculatedData?.map((element) =>
                    <tr>
                        <td>{element.year}</td>
                        <td>{formatter.format(element.annualInvestment)}</td>
                        <td>{formatter.format(element.interest)}</td>
                        <td>{element.year}</td>
                        <td>{formatter.format(element.valueEndOfYear)}</td>
                    </tr>
                )}

            </tbody>
        </table>
    );
}