import React, { memo } from 'react'
import { PRODACT } from '../../static'

function Prodacts() {
    let prodactItems = PRODACT?.map(el => (
        <div key={el.id} className="card">
            <div className="card__content">
                <h2>{el.name}</h2>
                <h4>{el.title}</h4>
                <div className="hero3__brn">
                    <button className="btn__hero3">Lern more</button>
                    <button className="btn__hero3">Buy</button>
                </div>
            </div>
            <img src={el.url} alt="dsdfws" className="card__image" />
        </div>
    )
    )
    return (
        <div className='wrapper'>

            {
                prodactItems
            }

        </div>
    )
}

export default memo(Prodacts) 