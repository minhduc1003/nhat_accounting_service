import React, { useEffect } from "react";
import "../animation.css";
const ScrollTop = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleScroll}
      className="fixed bottom-3 right-3 p-3 rounded-full border-4 hover:bg-orange-400 transition-all border-orange-400 border-solid scroll hover:text-white "
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default ScrollTop;
