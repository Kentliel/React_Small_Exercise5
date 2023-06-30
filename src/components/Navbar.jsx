import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navReactOne">
                <h3>React Exercises</h3>
                    <ul className="refNumbers">
                        <NavLink to="/1" className={({isActive}) => isActive ? "slected" : "nonselected"}>#1</NavLink>
                        <NavLink to="/2" className={({isActive}) => isActive ? "slected" : "nonselected"}>#2</NavLink>
                        <NavLink to="/3" className={({isActive}) => isActive ? "slected" : "nonselected"}>#3</NavLink>
                        <NavLink to="/4" className={({isActive}) => isActive ? "slected" : "nonselected"}>#4</NavLink>
                    </ul>
                
            </nav>
        </div>
    )
}

export default Navbar