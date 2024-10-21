import React, { useEffect } from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, divideFirstNumBySecondNum as divide } from '../../Utilities/calculate';
// import add from '../../Utilities/calculate';


const Sunglass = () => {
    const first = 55;
    const second = 20;
    const sum = add(first, second);
    const mult = multiply(first, second);
    const divider = divide(first, second);

    // console.log(sum, mult, divider);

    useEffect();
    
    return (
        <div>
            <Watch></Watch>
        </div>
    )
};

export default Sunglass;