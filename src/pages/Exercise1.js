import { useState } from "react";

const IncrementNumber = () => {
    const [number, setnumber] = useState(0)
    const Summation = () => {
        setnumber(number + 1);
    }
    return (
        <div>
            <nav className="navReactOne">
                <h3>React Exercises</h3>
                <div className="refNumbers">
                    <a href="#" className="link">#1</a>
                    <a href="#" className="link">#2</a>
                    <a href="#" className="link">#3</a>
                    <a href="#" className="link">#4</a>
                </div>
            </nav>
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