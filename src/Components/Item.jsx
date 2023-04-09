import React from 'react';
import { NavLink} from 'react-router-dom';

const Item = ({heading,id,createAt,img,...res}) => {
    return (
        <NavLink to={`/${id}`} className='tablet:w-[400px] w-[250px] flex flex-col justify-center gap-8 ' {...res} >
            <img className='w-full h-300px object-cover rounded-lg' src={img} alt="" />
            <h1 className='text-[#4E6878] hover:!text-[#51BA61] tablet:text-2xl text-lg font-medium'>{heading}</h1>
            <p className='text-gray-400'>{createAt}</p>
        </NavLink>
    );
};

export default Item;