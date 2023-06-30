import React from 'react';
import { useState } from 'react';
import ComponentC from './ComponentC';

const ComponentB = ({initial}) => {
    const [number, setNumber] = useState(initial)



    return(
        <div>
            <h1>ComponentB</h1>
            <h3>x = {number}</h3>
            <ComponentC initial={number} setNumber={setNumber}/>
        </div>
    )
};

export default ComponentB;