import React, { useEffect } from 'react';
import Item from '../Components/Item';
import { Link } from 'react-router-dom';
import { data } from '../data';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Section4 = () => {
    const getLimitData = []
    for(let i=0;i<=2;i++){
        getLimitData.push(data[i])
    }
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='w-full bg-[#F7F7F7] p-20' data-aos="fade-in">
            <div className='w-[1000px] mx-auto'>
                <h1 className='text-2xl tablet:text-4xl font-semibold mb-16 '>Latest news & insights</h1>
                <div className='flex flex-col tablet:flex-row gap-5 mb-8'>
                    {getLimitData.map((items)=>(<Item key={items.id} id={items.id} heading={items.heading} createAt={items.createAt} img={items.image}></Item>))}
                </div>
                <Link to={"/Blogs"} className='text-white px-20  py-4 bg-[#51BA61] tablet:mx-auto w-fit rounded-md block'>Show More</Link>
            </div>
        </div>
    );
};

export default Section4;