import React from 'react'
import { useState } from "react";
import './stars.css'
import Star from './star.png'
import { FaStar } from "react-icons/fa";

function Stars({name}) {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
        
    };
    
    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };
    return (
        <>
            <ul className='StarCon'>
                {stars.map((_, index) => {
                    return (
                        <>
                                <FaStar src={Star} 
                                className='star fstar checked' 
                                key={index} 
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}/>
                        </>
                    )
                }
                )}
            </ul>
        </>
    )
}

export default Stars
