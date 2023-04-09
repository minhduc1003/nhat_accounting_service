import React, { useEffect } from "react";
import "../animation.css";
const ScrollTop = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const getScroll = document.querySelector(".scroll");
  window.addEventListener("scroll", () => {
    var scroll_y = this.scrollY;
    if (scroll_y > 100) {
      getScroll.classList.add("add");
      getScroll.classList.remove("remove");
    } else {
      getScroll.classList.add("remove");
      getScroll.classList.remove("add");
    }
  });
  return (
    <div
      onClick={handleScroll}
      className="fixed bottom-3 right-3 p-2 rounded-full border-2 hover:bg-orange-400 transition-all border-orange-400 border-solid scroll "
    >
      <img className="w-8 h-8" src="./angle-small-up.svg" alt="" />
    </div>
  );
};

export default ScrollTop;
