import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#5CB8B2] w-full h-fit p-6 tablet:p-20  ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between  mb-5 flex-col tablet:flex-row tablet:items-center ">
          <div className="w-[200px] mb-5">
            <img
              className="w-full h-full object-cover"
              src="./acclime-logo-white.svg"
              alt=""
            />
          </div>
          <div className="flex gap-5 ">
            <NavLink
              to={"/"}
              className="fill-white rounded-full p-2 border border-solid border-gray-400 hover:border-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path>
                <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path>
              </svg>
            </NavLink>
            <NavLink className="fill-white rounded-full p-2 border border-solid border-gray-400 hover:border-white">
              <svg
                to={"/"}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
              </svg>
            </NavLink>
          </div>
        </div>
        <div className="flex justify-between gap-8 tablet:flex-row flex-col">
          <div>
            <div className="flex flex-col gap-5 mb-5">
              <h2 className="text-white font-medium text-xl">
                +84 28 3535 8200 (HCMC)
              </h2>
              <p className="text-white">
                We are open Monday – Friday: <br />
                8.30 am to 5.30 pm (UTC+7)
              </p>
            </div>
            <NavLink
              to={"/Email"}
              className={
                "rounded-xl py-2 px-6 text-white  border-2 broder-solid border-white transition-all hover:text-black hover:bg-white flex-1"
              }
            >
              Email
            </NavLink>
          </div>
          <div className="text-white flex flex-col tablet:flex-row gap-20">
            <div className="flex flex-col gap-5">
              <h2 className="text-white font-medium text-xl">Services</h2>
              <NavLink>Formation</NavLink>
              <NavLink>Corporate governance</NavLink>
              <NavLink>Accounting & tax</NavLink>
              <NavLink>HR outsourcing</NavLink>
              <NavLink>Advisory</NavLink>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-white font-medium text-xl">Company</h2>
              <NavLink>About us </NavLink>
              <NavLink>Contact us</NavLink>
              <NavLink>Careers</NavLink>
              <NavLink>News</NavLink>
              <NavLink>Events</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
