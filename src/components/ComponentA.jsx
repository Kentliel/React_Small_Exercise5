import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
    const number = 42
    return(
        <div>
            <h1>ComponentA</h1>
            <h3>x = <span className="number1">{number}</span> </h3>
            <ComponentB initial={number}/>

        </div>
    )
}

export default ComponentA;