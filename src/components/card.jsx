import React from 'react'
import Bill from './billingInfo';
import Range from './RangeS';
import Foot from './foot';

function Card() {

    
    return (
        <div className='container shadow-lg' id='card'>
            <div className='row justify-content center'>
            
                <div className='col-lg-6 col-sm-12 order-sm-1'  style={{ padding: "4% 10% 1%" }}>
                    <p id='views' style={{letterSpacing:"1.5px" , fontSize:"13px" , fontWeight:"650"}}>100K PAGEVIEWS</p>
                </div>
                <Range />
                <div className='col-lg-6 col-sm-12 order-sm-2'>
                    <p id='tprice'><span id='price'>$16.00</span>/month</p>
                </div>
            
            </div>
            <Bill />
            <Foot />
        </div>
    );
}

export default Card;