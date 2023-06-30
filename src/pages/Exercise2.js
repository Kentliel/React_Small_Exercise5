import { useEffect, useState } from "react";

const Calculador = () => {
    const [number1, setnumber1] = useState(0)
    const [number2, setnumber2] = useState(0)
    let [currentValue, setCurrentValue] = useState(0);
    const [sum, setsum] = useState([""]);

    useEffect(() => {
        const calculator = () => {
            console.log(sum[0]);
            switch (true) {
                case sum[0] == "+":
                    setCurrentValue(number1 + number2);
                    break;
                case sum[0] == "-":
                    setCurrentValue(number1 - number2);
                    break;
                case sum[0] == "*":
                    setCurrentValue(number1 * number2);
                    break;
                case sum[0] == "/":
                    setCurrentValue(number1 / number2);
                    break;
                default:
                    console.log("hola");
                    break;
            }
        }
        calculator();
    }, [sum])
    const Summation1 = () => {
        setnumber1(number1 + 1);
    }

    const Summation2 = () => {
        setnumber2(number2 + 1);
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
                <h1>Exercise 2</h1>
                <div className="backgroundBlue">
                    <p>Increment the number when you click on the buttons and display the result of the operation.</p>
                    <p>You can only use 3 states.</p>
                </div>
                <div className="representeNumbers">
                    <button onClick={Summation1} className="first">{number1}</button>
                    <select onChange={event => setsum([event.target.value])}>
                        <option value={"+"}>+</option>
                        <option value={"-"}>-</option>
                        <option value={"*"}>*</option>
                        <option value={"/"}>/</option>
                    </select>
                    <button onClick={Summation2} className="second">{number2}</button>
                    <p>= {currentValue}</p>
                </div>
            </div>
        </div>
    )
}

export default Calculador;