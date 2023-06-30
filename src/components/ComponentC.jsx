import React from 'react';
import { useState } from 'react';
const ComponentC = ({initial, setNumber}) => {
    
    const Summation = () => {
        setNumber(prev => prev + 1)
    }
    return(
        <div>
            <h1>ComponentC</h1>
            <h3>x = {initial}</h3>
            
        <button onClick={Summation}>add</button>
        </div>
    )
};

export default ComponentC;