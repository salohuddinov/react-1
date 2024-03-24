import React from 'react'
import "./Main.css"
import rasm8 from "../../assets/images/card.png"
import rasm9 from "../../assets/images/phone.png"


function Main() {
    return (
        <div className='main'>
            <div className="main__left">
                <h2>Card</h2>
                <p>Get up to 3% Daily Cash back
                    with every purches
                </p>
                <div className="hero3__brn">
                    <button className="btn__hero3">Lern more</button>
                    <button className="btn__hero3">Buy</button>
                </div>
                <img className='left__img' src={rasm8} alt="bcvzb" />
            </div>
            <div className="main__right">
                <h2>Trade in</h2>
                <p> Get 180$ - 630$ in credit when you trade in iPhone 11 or highre.
                </p>
                <div className="hero3__brn">
                    <button className="btn__hero3">See what yore devise is world </button>
                </div>
                <img className='right__img' src={rasm9} alt="gsdg" />
            </div>
        </div>
    )
}

export default Main