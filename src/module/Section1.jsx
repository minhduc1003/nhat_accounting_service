import React from "react";

const Section1 = () => {
  return (
    <section className="w-full h-[100vh] relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute tablet:left-[200px] left-[50px] tablet:top-1/4 top-[15%]  z-10 text-white max-w-[400px]">
        <h1 className="font-semibold text-5xl mb-7">What can we help</h1>
        <p className="whitespace-break-spaces text-lg">
          We offer a wide range of accounting services so that your company can
          effectively manage and track its financial position thanks to
          qualified professionals. We have a strong reputation for providing
          accurate financial information and top-notch customer service thanks
          to many years of business experience.
        </p>
      </div>
      <video
        playsInline
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      >
        <source src="./video.mp4"></source>
      </video>
    </section>
  );
};

export default Section1;
