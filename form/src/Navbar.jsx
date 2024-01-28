import React from 'react';
import './Navbar.css';

const Navbar=()=>{
    return (
        <nav className='navbar'>
            <ul className='navbar ul'>
                <li className='navbar il'><a className='navlink' href='/Navbar.jsx'>Home</a></li>
                <li className='navbar il'><a className='navlink' href='/about'>About</a></li>
                <li className='navbar il'><a className='navlink' href='/contact'>Contact</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;