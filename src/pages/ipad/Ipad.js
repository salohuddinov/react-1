import React from 'react'
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import "./ipad.css"

import img1 from "../../assets/ipad/img1.svg"
import img2 from "../../assets/ipad/img2.svg"
import img3 from "../../assets/ipad/img3.svg"
import img4 from "../../assets/ipad/img4.svg"
import img5 from "../../assets/ipad/img5.svg"
import img6 from "../../assets/ipad/img6.svg"
import img7 from "../../assets/ipad/img7.svg"
import img8 from "../../assets/ipad/img8.svg"
import img9 from "../../assets/ipad/img9.svg"
import img10 from "../../assets/ipad/img10.svg"
import ipadcard from "../../assets/ipad/ipad-card.png"



function Ipad() {
    return (
        <div className='ipad'>
            <Navbar />
            <div className="ipad__hero">
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img1} alt="bcvzb" />
                    <h4>iPad Pro</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img2} alt="bcvzb" />
                    <h4>iPad Air</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img3} alt="bcvzb" />
                    <h4>iPad</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img4} alt="bcvzb" />
                    <h4>iPad mini</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img5} alt="bcvzb" />
                    <h4>Compare</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img6} alt="bcvzb" />
                    <h4>Apple Pencil</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img7} alt="bcvzb" />
                    <h4>Keyboards</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img8} alt="bcvzb" />
                    <h4>Accessories</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img9} alt="bcvzb" />
                    <h4>iPadOS 17</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img10} alt="bcvzb" />
                    <h4>Shop iPad</h4>
                </div>
            </div>
            <div className="ipad__hero__bootm">
                <p> Get 3% Daily Cash back with Apple Card. And pay for your new Mac over 12 months, interest‑free when you choose to check out with Apple Card  Monthly Installments.</p>
                <button>Learn more </button>
            </div>
            <div className="ipad__section">
                <img className='ipad__section__img' src={ipadcard} alt="rwetgeqrq" />
            </div>
            <Footer />
        </div>
    )
}

export default Ipad