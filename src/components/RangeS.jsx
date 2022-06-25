import React, {useState} from "react";



function Range(){
    const [value, setValue] = useState(0);
    const getBackgroundSize = () => {
        return { backgroundSize: `${value * 100 / 10}% 100%` }
    }

    return(
        <div className='col-lg-12 order-sm-3 ' style={{ padding: "1% 9% 4%" }}>
                    <input
                        className='sliderBar'
                        max={10}
                        step={0.1}
                        type="range"
                        value={value}
                        onChange={(e) => setValue(e.target.valueAsNumber)}
                        style={getBackgroundSize()}
                    ></input>
                    
                </div>
    );
}

export default Range;