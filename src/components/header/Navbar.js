import React, { memo } from 'react'
import "./Navbar.css"
import { IoLogoApple } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { NAVBAR_ITEMS } from "../../static"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className='navbar'>
            <ul className="navbar__collection">
                <IoLogoApple className='apple__svg' />
                <NavLink className="navbar__item" to={"/"} >Store</NavLink>
                <NavLink className="navbar__item" to={"/mac"} >Mac</NavLink>
                <NavLink className="navbar__item" to={"/ipad"} >Ipad</NavLink>
                <NavLink className="navbar__item" to={"/phone"} >Phone</NavLink>
                <NavLink className="navbar__item" to={"/watch"} >Watch</NavLink>
                <NavLink className="navbar__item" to={"/vision"} >Vision</NavLink>
                {
                    NAVBAR_ITEMS.map((el, index) => <li key={index} className='navbar__item'>{el}</li>)
                }
                <IoSearch className='apple__svg' />
                <IoBagOutline className='apple__svg' />
            </ul>

        </div>
    )
}

export default memo(Navbar) 