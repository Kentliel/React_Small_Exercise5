import { useState } from "react";
import ComponentA from "../components/ComponentA";
import ComponentB from "../components/ComponentB";
import ComponentC from "../components/ComponentC";

const FromParentsToChildren = () => {
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
                <h1>Exercise 3</h1>
                <div className="backgroundBlue">
                    <p><u>Iteration 1:</u> Give the value of "x" from ComponentA to ComponentC</p>
                    <p><u>Iteration 2:</u> Change the "x" when clicking on the button "x++"</p>
                </div>
                <ComponentA>
                <p>x = <span className="number1">42</span> </p>
                <ComponentB>
                <button onClick={Summation}>x = {number} </button>
                <ComponentC>
                <button onClick={Summation}>x = {number} </button>
                </ComponentC>
                </ComponentB>
                </ComponentA>
                
                
            </div>
        </div>
    )
}

export default FromParentsToChildren;