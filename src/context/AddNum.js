import React, { useState } from 'react';

const AddNum = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    const handleAdd = () => {
        setSum(num1 + num2);
    };

    return (
        <div>
            <input 
                type="number" 
                value={num1} 
                onChange={(e) => setNum1(Number(e.target.value))} 
                placeholder="Enter first number" 
            />
            <input 
                type="number" 
                value={num2} 
                onChange={(e) => setNum2(Number(e.target.value))} 
                placeholder="Enter second number" 
            />
            <button onClick={handleAdd}>Add</button>
            <h2>Sum: {sum}</h2>
        </div>
    );
};

export default AddNum;