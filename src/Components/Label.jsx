import React from 'react';

const Label = ({name,type="text"}) => {
    return (
        <div className='flex-auto'>
            <label htmlFor={name}>{name}</label>
            <input type={type} className='w-full outline-none p-4 rounded-lg ' id={name} placeholder={name}></input>
        </div>
    );
};

export default Label;