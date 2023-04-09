import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="w-full flex justify-center items-center h-[fit] p-10 bg-[#25252F]" data-aos="fade-up">
      <div className="text-white relative">
        <h1 className="text-center text-5xl line mb-10">Your needs</h1>
        <p className=" block mx-auto w-[70%]  text-justify text-lg ">
          Protecting the interests of the business is the purpose that we wish
          to accomplish for our customers. With the achievements that NAS has
          achieved, we are one of the leading quality auditing companies in
          Vietnam. The company has taken on and solved countless problems in the
          field of finance and accounting for domestic and foreign businesses
          against internal and external risks. Businesses can rest assured when
          giving trust and are guaranteed to receive favorable results, benefit
          from the most effective work from us.
        </p>
      </div>
    </section>
  );
};

export default Section2;
