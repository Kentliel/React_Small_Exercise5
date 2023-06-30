import { useState } from "react";

const IncrementNumber = () => {
    const [number, setnumber] = useState(0)
    const Summation = () => {
        setnumber(number + 1);
    }
    return (
        <div>
            <div className="exerciseOne">
                <h1>Exercise 1</h1>
                <div className="backgroundBlue">
                    <p>Increment the number of like when you click on it</p>
                </div>
                <button onClick={Summation}>{number} likes</button>
            </div>
        </div>
    )
}

export default IncrementNumber;