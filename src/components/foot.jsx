import React from "react";
import checks from "../images/icon-check.svg"

function Foot(){
    return(
        <div>
            <hr></hr>
            <div className="row py-2">
                <div className="col-12 col-sm-6">
                    <ul>
                        <li><img src={checks} alt="check"></img> Unlimited Websites</li>
                        <li><img src={checks} alt="check"></img> 100% data ownership</li>
                        <li><img src={checks} alt="check"></img> Email reports</li>
                    </ul>
                </div>
                <div className="col-12 py-2 col-sm-6">
                    <button id="Fbtn">Start my trail</button>
                </div>
            </div>
        </div>
        
    );
}

export default Foot;