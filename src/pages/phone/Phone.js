import React from 'react'
import Navbar from '../../components/header/Navbar';

import "./phone.css"

import img1 from "../../assets/phone/img1.svg"
import img2 from "../../assets/phone/img2.svg"
import img3 from "../../assets/phone/img3.svg"
import img4 from "../../assets/phone/img4.svg"
import img5 from "../../assets/phone/img5.svg"
import img6 from "../../assets/phone/img6.svg"
import img7 from "../../assets/phone/img7.svg"
import img8 from "../../assets/phone/img8.svg"
import img9 from "../../assets/phone/img9.svg"
import img10 from "../../assets/phone/img10.svg"
import img11 from "../../assets/phone/img11.svg"
import img12 from "../../assets/phone/img12.svg"
import phone1 from "../../assets/phone/img1.png"
import phone2 from "../../assets/phone/phone2.png"


function Phone() {
    return (
        <div className='phone'>
            <Navbar />
            <div className="phone__hero">
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img1} alt="bcvzb" />
                    <h4>iPhone 15 Pro</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img2} alt="bcvzb" />
                    <h4>iPhone 15</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img3} alt="bcvzb" />
                    <h4>iPhone 14</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img4} alt="bcvzb" />
                    <h4>iPhone 13</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img5} alt="bcvzb" />
                    <h4>iPhone SE</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img6} alt="bcvzb" />
                    <h4>Compare</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img7} alt="bcvzb" />
                    <h4>AirPods</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img8} alt="bcvzb" />
                    <h4>AirTag</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img9} alt="bcvzb" />
                    <h4>Accessories</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img10} alt="bcvzb" />
                    <h4>Apple Card</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img11} alt="bcvzb" />
                    <h4>IOS 17</h4>
                </div>
                <div className="phone__hero__card">
                    <img className='hcard__img' src={img12} alt="bcvzb" />
                    <h4>Shop iPhone</h4>
                </div>
            </div>
            <div className="phone__hero__bootm">
                <p> Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.1 </p>
                <button>Learn more </button>
            </div>
            <div className="msection__top">
                <h1>iPhone</h1>
                <h3>Design to be loved</h3>
            </div>
            <div className="msection__vd">
                <div class="card">
                    <div class="card-inner">
                        <div class="card-front">
                            <img className='card__fimg' src={phone1} alt="bcvzb" />
                        </div>
                        <div class="card-back">
                            <img className='card__fimg' src={phone2} alt="bcvzb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phone