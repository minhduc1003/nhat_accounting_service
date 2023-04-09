import React from 'react';

const BoxList = ({heading,children}) => {
    return (
        <div className="max-w-[700px] p-10 h-fit shadow-lg rounded-lg">
      <div className="flex gap-4 ">
     
        <h1 className="text-[#002662] font-semibold text-xl mb-4 ">
         {heading}
        </h1>
      </div>
     <div>
     {children}
     </div>
    </div>
    );
};

export default BoxList;