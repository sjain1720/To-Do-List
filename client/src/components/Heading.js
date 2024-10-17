import React from 'react';
import './Heading.css';

const Heading = ({text}) => {
    return (
        <div className="heading" >
            <p>{text}</p>
        </div>
    );
};

export default Heading;
