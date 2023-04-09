import React from 'react';

const Section1 = () => {
    return (
        <section className="w-full h-[100vh] relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/4 left-[200px] z-10 text-white max-w-[400px]">
          <h1 className="font-semibold text-5xl mb-7">
            Tại sao chúng ta ở đây
          </h1>
          <p className="whitespace-break-spaces text-lg">
            Chúng tôi cung cấp một loạt các dịch vụ kế toán để công ty của bạn
            có thể quản lý và theo dõi tình hình tài chính một cách hiệu quả nhờ
            các chuyên gia có trình độ. Chúng tôi có uy tín cao trong việc cung
            cấp thông tin tài chính chính xác và dịch vụ khách hàng hàng đầu nhờ
            có nhiều năm kinh nghiệm kinh doanh.
          </p>
        </div>
        <video playsInline autoPlay muted loop className="w-full h-full object-cover">
          <source src="./video.mp4"></source>
        </video>
      </section>
    );
};

export default Section1;