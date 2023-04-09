import React from 'react';
import { NavLink} from 'react-router-dom';

const Item = ({heading,id,createAt,img,...res}) => {
    return (
        <NavLink to={`/${id}`} className='w-[400px] flex flex-col gap-5 ' {...res} >
            <img className='w-full h-300px object-cover rounded-lg' src={img} alt="" />
            <h1 className='text-[#4E6878] hover:!text-[#51BA61] text-2xl font-medium'>{heading}</h1>
            <p className='text-gray-400'>{createAt}</p>
        </NavLink>
    );
};

export default Item;