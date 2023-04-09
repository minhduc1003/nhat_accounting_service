import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import parse from "html-react-parser";
import "../blogdetail.css";
import ScrollTop from "../Components/ScrollTop";
const Blogdetail = () => {
  const { slug } = useParams();

  return (
   <>
     <div className="max-w-[1200px] mx-auto tablet:p-20 p-5 loading2 overflow-hidden">
      {data.map(
        (items) =>
          items.id == slug && (
            <div key={items.id}>
              <div className="flex justify-between items-center mb-10">
                <div className=" max-w-[500px] tablet:flex-none">
                  <h1 className="tablet:text-4xl text-2xl text-[#00263E] font-bold mb-4">
                    {items.heading}
                  </h1>
                  <p className="text-gray-400 text-base mb-5">
                    {items.createAt}
                  </p>
                  <div className=" w-32 flex items-center justify-center text-white p-3 h-10 rounded-xl bg-orange-400 cursor-pointer">
                    Start reading
                  </div>
                </div>
                <img src={items.image} className="rounded-full hidden tablet:block" alt="" />
              </div>
              <div className="flex justify-between ">
                <div></div>
                <div className="tablet:flex-1 max-w-[350px] tablet:max-w-[1100px]">{parse(items.content)}</div>
              </div>
            </div>
          )
      )}
    </div>
    <ScrollTop></ScrollTop>
   </>
  );
};

export default Blogdetail;
