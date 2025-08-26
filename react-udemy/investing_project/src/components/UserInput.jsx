export default function UserInput({onCalculate,investmentData}) {
    return (

        <div id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initial-investment">Initial Investment:</label>
                    <input type="number" id="initial-investment" onChange={onCalculate} defaultValue={investmentData[0]} />
                </div>
                <div>
                    <label htmlFor="annual-investment">Annual Investment:</label>
                    <input type="number" id="annual-investment" onChange={onCalculate} defaultValue={investmentData[1]} />
                </div>
            </div>

            <br/>
            
            <div className="input-group">
                <div>
                    <label htmlFor="expected-return">Expected Return:</label>
                    <input type="number" id="expected-return" onChange={onCalculate} defaultValue={investmentData[2]} />
                </div>
                <div>
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" id="duration" onChange={onCalculate} defaultValue={investmentData[3]} />
                </div>
            </div>
    </div>
    );
}