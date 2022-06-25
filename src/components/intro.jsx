import React from "react";
import pattern from '../images/pattern-circles.svg'

function Intro() {
    return (

        <div className="row justify-content-center" id="upperDiv">
            <img src={pattern} alt="circles" id="circles"></img>

            <div id="textOnImg1">
                Simple, traffic-based pricing
            </div>
            <div id="textOnImg2">
                Sign-up for 30-day trail. No credit card required
            </div>

        </div>
    );
}

export default Intro;