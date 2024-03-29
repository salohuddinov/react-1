import React from 'react'
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import "./vision.css"
import vision from "../../assets/watch/wision.png"

function Vision() {
    return (
        <div className='vision'>
            <Navbar />
            <div className="vision__hero">
                <h2>Apple Vision Pro</h2>
                <div className="vision__hero__right">
                    <h3>Overviw</h3>
                    <h3>Guided Tour</h3>
                    <h3>Tech specs</h3>
                    <button>book and demo </button>
                    <button>buy</button>
                </div>
            </div>

            <div className="vision__img">
                <img className='img' src={vision} alt="gfdw" />
            </div>
            <Footer />
        </div>
    )
}

export default Vision