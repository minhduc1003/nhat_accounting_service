import React from 'react';
import Item from '../Components/Item';
import { data } from '../data';

const Items = () => {
    return (
       <div className='max-w-[1300px] mx-auto  '>
       <h1 className='text-4xl font-bold text-[#4E6878] mt-8 p-10'>My Blog</h1>
         <div className='flex flex-wrap gap-10 mb-20 mt-20 loading items-center justify-center '>
           {data.map((items)=><Item id={items.id} key={items.id} heading={items.heading} createAt={items.createAt} img={items.image}></Item>)}
        </div>
       </div>
    );
};

export default Items;