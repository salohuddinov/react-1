import React from 'react'
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';

import "./watch.css"

import img1 from "../../assets/watch/img1.svg"
import img2 from "../../assets/watch/img2.svg"
import img3 from "../../assets/watch/img3.svg"
import img4 from "../../assets/watch/img4.svg"
import img5 from "../../assets/watch/img5.svg"
import img6 from "../../assets/watch/img6.svg"
import img7 from "../../assets/watch/img7.svg"
import img8 from "../../assets/watch/img8.svg"
import img9 from "../../assets/watch/img9.svg"
import img10 from "../../assets/watch/img10.svg"
import img11 from "../../assets/watch/img11.svg"
import img12 from "../../assets/watch/img12.svg"
import img13 from "../../assets/watch/img13.svg"
import watch from "../../assets/watch/watch.png"



function Watch() {
    return (
        <div className='watch'>
            <Navbar />
            <div className="ipad__hero">
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img1} alt="bcvzb" />
                    <h4>Apple Watch <br /> Seris 9</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img2} alt="bcvzb" />
                    <h4>Apple Watch <br /> ultra 2</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img3} alt="bcvzb" />
                    <h4>Apple Watch <br /> SE</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img4} alt="bcvzb" />
                    <h4>Apple Watch <br /> Nike</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img5} alt="bcvzb" />
                    <h4>Apple Watch <br /> Hermes</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img6} alt="bcvzb" />
                    <h4>Apple Watch <br /> Studio</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img7} alt="bcvzb" />
                    <h4>Compare</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img8} alt="bcvzb" />
                    <h4>Bands</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img9} alt="bcvzb" />
                    <h4>AirPods</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img10} alt="bcvzb" />
                    <h4>Accessories</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img11} alt="bcvzb" />
                    <h4>Apple Fitnes+</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img12} alt="bcvzb" />
                    <h4>watchOS 10</h4>
                </div>
                <div className="ihero__card">
                    <img className='ipad__card__img' src={img13} alt="bcvzb" />
                    <h4>Shop Watch</h4>
                </div>
            </div>
            <div className="ipad__hero__bootm">
                <p> Get 3 months of Apple Fitness+ when you buy any Apple Watch.1 Shop Apple Watch</p>
                <button>Learn more </button>
            </div>
            <div className="ipad__section">
                <img className='ipad__section__img' src={watch} alt="rwetgeqrq" />
            </div>
            <Footer />

        </div>
    )
}

export default Watch