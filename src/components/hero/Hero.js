import React, { memo } from 'react'
import "./Hero.css"
import rasm1 from "../../assets/images/hero-iphone15max.png"
import rasm2 from "../../assets/images/hero-iphone15.png"
import rasm3 from "../../assets/images/hero-girl.jpg"



function Hero() {
    return (
        <>
            <div className='hero'>
                <h1 className='hero__h1'>iPhone 15 pro</h1>
                <p className="hero__p"> Titanum. So strong. So light. So pro</p>
                <div className="hero__brn">
                    <button className="btn__hero">Lern more</button>
                    <button className="btn__hero">Buy</button>
                </div>
                <img className='hero__images' src={rasm1} alt="fsaf" />
            </div>
            <div className='hero2'>
                <h1 className='hero2__h1'>iPhone 15 pro</h1>
                <p className="hero2__p"> Titanum. So strong.So light.So pro</p>
                <div className="hero2__brn">
                    <button className="btn__hero2">Lern more</button>
                    <button className="btn__hero2">Buy</button>
                </div>
                <img className='hero2__images' src={rasm2} alt="dahkdj" />
            </div>
            <div className='hero3'>
                <img className='hero3__img' src={rasm3} alt="fsaf" />
                <h1 className='hero3__h1'>iPhone 15 pro</h1>
                <p className="hero3__p"> Titanum. So strong.So light.So pro</p>
                <div className="hero3__brn">
                    <button className="btn__hero3">Lern more</button>
                    <button className="btn__hero3">Buy</button>
                </div>
            </div>
        </>
    )
}

export default memo(Hero) 