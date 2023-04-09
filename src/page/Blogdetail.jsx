import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data';
import parse from 'html-react-parser';
import "../blogdetail.css"
const Blogdetail = () => {
    const {slug} = useParams()
    
    return (
        <div className='w-[1200px] mx-auto p-20 loading2'>
            {data.map((items)=>(items.id==slug)&&
            <div key={items.id}>
                <div className='flex justify-between items-center mb-10'>
                    <div className=' w-[500px] flex-none'>
                    <h1 className='text-4xl text-[#00263E] font-bold mb-4'>{items.heading}</h1>
                    <p className='text-gray-400 text-base mb-5'>{items.createAt}</p>
                    <div className=' w-32 flex items-center justify-center text-white p-3 h-10 rounded-xl bg-orange-400 cursor-pointer' >Start reading</div>
                    </div>
                    <img src={items.image} className='rounded-full' alt="" />
                </div>
                <div className='flex gap-[200px]'>
                    <div>a</div>
                    <div className='flex-1'>
                       {parse(items.content)}
                    </div>
                </div>






            </div>
            
            
            
            
            )}
        </div>
    );
};

export default Blogdetail;