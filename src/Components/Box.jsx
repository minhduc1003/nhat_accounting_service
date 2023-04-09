import React from "react";

const Box = ({heading,content}) => {
  return (
    <div className="max-w-[500px] p-10 h-fit shadow-lg rounded-lg">
      <div className="flex gap-3 ">
      <div className="w-6 h-6 rounded-full bg-orange-400"></div>
        <h1 className="text-[#002662] font-semibold text-xl mb-5 ">
         {heading}
        </h1>
      </div>
      <p className="text-base text-[#002662]">
       {content}
      </p>
    </div>
  );
};

export default Box;
