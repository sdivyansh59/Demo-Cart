import React from 'react'

function Card({obj}) {
    return (
        <div className='app__main__right__card__item'>
            <img src={`${obj.image}`} alt={`${obj.name} image`} width="200" height="200"/>
            <h3>{`${obj.name}`}</h3>
            <span> <b>{`₹${obj.price.actual}`}</b> <del>{`₹${obj.price.display}`}</del><i>{`${obj.discount}% off`}</i> </span> 
            <br/>
            <button>Add to Cart</button>
        </div>
    )
}

export default Card
