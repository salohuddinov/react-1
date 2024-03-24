import React from 'react'
import "./Navbar.css"
import { IoLogoApple } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { NAVBAR_ITEMS } from "../../static"




function Navbar() {
    return (
        <div className='navbar'>
            <ul className="navbar__collection">
                <IoLogoApple className='apple__svg' />
                {
                    NAVBAR_ITEMS.map((el, index) => <li key={index} className='navbar__item'>{el}</li>)
                }
                <IoSearch className='apple__svg' />
                <IoBagOutline className='apple__svg' />
            </ul>
        </div>
    )
}

export default Navbar