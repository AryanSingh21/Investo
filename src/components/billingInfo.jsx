import React from "react";

function Bill(){
    return (
        <div className='row' style={{padding:"3% 10% 1%"}}>
            <div className='col' >
                <p style={{marginLeft:"22px"}}>Monthly billing
                    <span>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </span>
                </p>
                </div>
                <div className='col'>
                <p>Yearly billing
                <span id='discount'>
                    25% discount
                </span>
                </p>
            </div>
            </div>
    )
}

export default Bill;