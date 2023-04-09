import React from 'react';

const ListItem = ({children}) => {
    return (
        <div className='flex gap-5 mb-3'>
            <div className="w-5 h-5 rounded-full bg-orange-400 flex-shrink-0"></div>
            <p>{children}</p>
        </div>
    );
};

export default ListItem;