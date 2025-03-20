import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className='navbar'>
            <h1>Ceylon bliss International</h1>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/shop"> Shop </Link></li>
                <li><Link to="/cart"> Cart </Link></li>
                <li><Link to="/login"> Login </Link></li>
                <li><Link to="/about"> About </Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;