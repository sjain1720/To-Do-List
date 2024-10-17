import React from 'react';
import './Heading.css';

const AddTask = ({text}) => {
    return (
        <div className="heading" >
            <p>{text}</p>
        </div>
    );
};

export default AddTask;
