import React from 'react'

function Left() {
    return (
        <div className='app__main__left'> 
            <div className='app__main__left__heading'> Filter </div>

            <div className='app__main__left__price'> 
                <div>100</div>
                <div>733</div>
                <div>10000</div>
            </div>

             <input className='app__main__left__input' type='range' min='100' max='10000' ></input>
            
            <button className='app__main__left__button'>Apply</button>

        </div>
    )
}

export default Left
