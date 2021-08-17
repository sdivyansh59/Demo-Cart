import React from 'react'
import Card from './Card'
import data from '../assets/data.js'

function Right() {

  
    
    return (
        <div className='app__main__right'>
            <div className='app__main__right__SortBy'> 
                <b>Sort By</b>

                <span>Price -- High Low</span>

                <span>Price -- Low High</span>

                <span>Discount</span>
            </div>
         
             <div className='app__main__right__card'>
                 {
                      data.map(obj=>{
                      return <Card obj={obj}  key={obj.name}/>
                      })
                }
             </div>      
        
           
           
        </div>
    )
}

export default Right
