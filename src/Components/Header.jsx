import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const [active,setActive]=useState(false)
  active?document.body.style.overflow="hidden":document.body.style.overflow="unset"
  const navigationList = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Blog",
      to: "/Blogs",
    },
    {
      id: 3,
      title: "Services",
      to: "/Services",
    },
    {
      id: 4,
      title: "Contact",
      to: "/Contact",
    },
   
  ];

  return (
    <>
      <div className="relative tablet:hidden select-none">
      {active&&<div className="absolute inset-0 w-[100vw] h-[100vh] bg-slate-400 opacity-50 z-10"></div>}
        <div onClick={()=>setActive(true)} className="p-5">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div  className={`bg-[#1F232C] shadow-sm w-fit p-5 absolute top-0  transition-all h-[100vh] z-20  ${active?"":"-translate-x-[250px]" }`}>
          <div className="flex gap-5 mb-5">
            <div onClick={()=>setActive(false)}>
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className="w-20 h-10" >
              <img
                className="w-full h-full "
                src="./logo.png"
                alt="s"
              />
            </div>
          </div>
          {navigationList.map((items) => (
            <div className="flex gap-5 " key={items.id}>
              <NavLink
                className={({ isActive }) =>isActive ? "text-white bg-[#51BA61] p-2 mb-5 w-full" : "w-full p-2 mb-5"}
                to={items.to}
                onClick={()=>setActive(false)}
              >
                {items.title}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="sticky top-0 w-full bg-[#1F232C] hidden tablet:block text-white z-[100] ">
        <div className="max-w-[1440px] mx-auto h-11 flex  justify-between items-center p-10">
          <div className="flex items-center gap-5">
            <div className="w-20 h-10">
              <img
                className="w-full h-full "
                src="./logo.png"
                alt="s"
              />
            </div>
            {navigationList.map((items) => (
              <div className="flex gap-5" key={items.id}>
                <NavLink
                  
                  className={({ isActive }) =>
                    isActive ? "text-[#51BA61]" : ""
                  }
                  to={items.to}
                >
                  {items.title}
                </NavLink>
              </div>
            ))}
          </div>
          <div>
            <NavLink
              className={
                "border-4 border-solid border-[#51BA61] rounded-xl p-4 hover:bg-[#51BA61] transition-all"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
