import React from "react";

const Section3 = () => {
  return (
    <section className="w-full flex  ">
      <div className="flex-1 bg-[#4F2D7F] text-white p-20 pr-32 flex items-end flex-col h-[600px] justify-center  ">
        <div className="max-w-[450px] ">
        
        <p className=" text-xl mb-6">Nhiệm vụ của chúng tôi</p>
        <h1 className="whitespace-break-spaces font-semibold text-5xl mb-6">Kế toán quản trị</h1>
        <p className="whitespace-break-spaces text-xl">
          Cung cấp giúp nhà quản trị đưa ra các quyết định đúng đắn và phù hợp
          với những kế hoạch đã đặt ra trong ngắn hạn hoặc dài hạn
        </p>
        </div>
      </div>
      <div className="flex-1 bg-white p-20 pl-32 h-[600px]  flex flex-col items-start justify-center">
       <div className="max-w-[450px]">
       <p className=" text-xl mb-6">Nhiệm vụ của chúng tôi</p>
       <h1 className="whitespace-break-spaces font-semibold text-5xl mb-6">Kế toán tài chính</h1>
        <p className="whitespace-break-spaces text-xl ">
          Thu thập, xử lý, phân tích, kiểm tra và cung cấp những dữ liệu về
          thông tin tài chính kinh tế thông qua báo cáo tài chính đến những ai
          có nhu cầu về việc sử dụng.
        </p>
       </div>
      </div>
    </section>
  );
};

export default Section3;
