import React from 'react'
import "./mac.css"
import Navbar from '../../components/header/Navbar';
import img1 from "../../assets/images/img1.svg"
import img2 from "../../assets/images/img2.svg"
import img3 from "../../assets/images/img3.svg"
import img4 from "../../assets/images/img4.svg"
import img5 from "../../assets/images/img5.svg"
import img6 from "../../assets/images/img6.svg"
import img7 from "../../assets/images/img7.svg"
import img8 from "../../assets/images/img8.svg"
import img9 from "../../assets/images/img9.svg"
import img10 from "../../assets/images/img10.svg"
import img11 from "../../assets/images/img11.svg"
import fonts1 from "../../assets/images/card-img1.png"
import fonts2 from "../../assets/images/card-img2.png"



function Mac() {
    return (
        <div className='mac'>
            <Navbar />
            <div className="mac__hero">
                <div className="mhero__card">
                    <img className='hcard__img' src={img1} alt="bcvzb" />
                    <h4>MacBook Air</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img2} alt="bcvzb" />
                    <h4>MacBook Pro</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img3} alt="bcvzb" />
                    <h4>iMac</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img4} alt="bcvzb" />
                    <h4>Mac mini</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img5} alt="bcvzb" />
                    <h4>Mac Studio</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img6} alt="bcvzb" />
                    <h4>Mac Pro</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img7} alt="bcvzb" />
                    <h4>Compare</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img8} alt="bcvzb" />
                    <h4>Displays</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img9} alt="bcvzb" />
                    <h4>Accessories</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img10} alt="bcvzb" />
                    <h4>Sonoma</h4>
                </div>
                <div className="mhero__card">
                    <img className='hcard__img' src={img11} alt="bcvzb" />
                    <h4>Shop Mac</h4>
                </div>
            </div>
            <div className="mhero__bootm">
                <p> Get 3% Daily Cash back with Apple Card. And pay for your new Mac over 12 months, interest‑free when you choose to check out with Apple Card <br /> Monthly Installments.</p>
                <button>Learn more </button>
            </div>
            <div className="msection">
                <div className="msection__top">
                    <h1>Mac</h1>
                    <h3>If you can dream it,<br /> Mac can do it.</h3>
                </div>
                <div className="msection__vd">
                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                <img className='card__fimg' src={fonts1} alt="bcvzb" />
                            </div>
                            <div class="card-back">
                                <img className='card__fimg' src={fonts2} alt="bcvzb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mac