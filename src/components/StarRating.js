import React, { useState } from 'react'
import Star from './Star';

const containerStyle = {
    display: "flex",
    alignItems: "center"
};
const starContainerStyle = {
    display: "flex",
    alignItems: "center"
};

const StarRating = ({
        maxRating = 5, 
        size = 48, 
        color = '#fcc419', 
        className = "", 
        messages=[], 
        defaultRating = 0
    }) => {
        
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    const handleRating = (rating) => {
        setRating(rating);
    }
    const textStyle = {
        lineHeight: "1",
        margin: "0",
        color,
        fontSize: `${size / 1.5}px`
    };

    return (
        <div style={containerStyle} className={className}>
            <div style={starContainerStyle}>{Array.from({length: maxRating}, (_, i) => 
                <Star 
                    key={i} 
                    full={tempRating ? tempRating >= i + 1 : rating >= i + 1} 
                    onRate={() => handleRating(i + 1)} 
                    onHoverIn={() => setTempRating(i + 1)} 
                    onHoverOut={() => setTempRating(0)} 
                    color={color}
                    size={size}
                    defaultRating={defaultRating}
                />
            )}</div>
            <p style={textStyle}>{messages.length === maxRating ? messages[tempRating ? tempRating- 1 : rating - 1] || '' : tempRating || rating || ''}</p>
        </div>
    )
}

export default StarRating