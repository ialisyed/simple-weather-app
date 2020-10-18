import React from 'react';

/**
 * Customizing slider's arrows
 * @param {any} props 
 */
function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} customArrow`}
            style={{ ...style, color: 'black' }}
            onClick={onClick}
        />
    );
}

export default Arrow;