import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section3 = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="w-full flex flex-col tablet:flex-row  ">
      <div className="flex-1 bg-[#4F2D7F] text-white p-20 pr-32 flex items-end flex-col h-[600px] justify-center " data-aos="fade-right">
        <div className="max-w-[450px] ">
          <p className=" text-xl mb-6">My chalenger</p>
          <h1 className="whitespace-break-spaces font-semibold text-5xl mb-6">
            Management accounting
          </h1>
          <p className="whitespace-break-spaces text-xl">
            Provides to help managers make the right decisions and in accordance
            with the set plans in the short term or long term.
          </p>
        </div>
      </div>
      <div className="flex-1 bg-white p-20 pl-32 h-[600px]  flex flex-col items-start justify-center" data-aos="fade-left">
        <div className="max-w-[450px]">
          <p className=" text-xl mb-6">My chalenger</p>
          <h1 className="whitespace-break-spaces font-semibold text-5xl mb-6">
            Financial accountant
          </h1>
          <p className="whitespace-break-spaces text-xl ">
            Collect, process, analyze, examine and provide data on economic and
            financial information through financial statements to those who need
            it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
