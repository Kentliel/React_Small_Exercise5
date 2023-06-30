import { useState } from "react";
import Application from "../components/Application";
import BigInput from "../components/BigInput";
import DisplayPrimeNumbers from "../components/DisplayPrimeNumbers";


const PrimeNumbers = () => {
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
                    <p>When the user type some information in the input, it should change the list of prime numbers.</p>
                </div>
                <Application />
                <BigInput />
                <DisplayPrimeNumbers />
                
                <button onClick={Summation}>{number} likes</button>
            </div>
        </div>
    )
}

export default PrimeNumbers;