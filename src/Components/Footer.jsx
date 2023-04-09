import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[url(https://i.pinimg.com/originals/9e/4f/72/9e4f72bd46b987ff4825845bcd9208d5.jpg)] bg-no-repeat bg-cover w-full h-fit p-6 tablet:p-20  ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between  mb-5 flex-col tablet:flex-row tablet:items-center ">
          <div className="w-[200px] mb-5">
            <img
              className="w-full h-full object-cover"
              src="./logo.png"
              alt=""
            />
          </div>
          <div className="flex gap-5 ">
            <NavLink
            target="_blank"
              to={"https://www.instagram.com/_nhaattt/?fbclid=IwAR30JE1x6g5gEh2wAdoz_t3CM4nm5NJE0ZCEVCATl8yKGKHpTGGIWQSe9uU"}
              className="fill-white rounded-full p-2 border border-solid border-gray-400 hover:border-white"
            >
              <img src="./ins.svg" className="w-5 h-5"></img>
            </NavLink>
            <NavLink target="_blank" to={"https://www.facebook.com/profile.php?id=100015868055039"} className="fill-white rounded-full p-2 border border-solid border-gray-400 hover:border-white">
              <svg
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
            <div className="flex gap-3 items-center text-white">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <p>0967595699</p>
              </div>
              <div className="flex gap-3 items-center text-white">
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
                      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                    />
                  </svg>
                </span>
                <p>nhatanh150769@gmail.com</p>
              </div>
              <p className="text-white">
                We are open Monday – Friday: <br />
                8.30 am to 5.30 pm (UTC+7)
              </p>
            </div>
           
          </div>
          <div className="text-white flex flex-col tablet:flex-row gap-20">
            <div className="flex flex-col gap-5">
              <NavLink to={"/Services"} className="text-white font-medium text-xl">Services</NavLink>
              <div className="max-w-[400px] flex flex-col gap-3 font-medium">
              <NavLink to={"/Services"}>Tax accounting services</NavLink>
              <NavLink to={"/Services"}>Audit Services</NavLink>
              <NavLink to={"/Services"}>Tax Reporting Service</NavLink>
              <NavLink to={"/Services"}>Transfer pricing service, profiling associated transactions</NavLink>
              <NavLink to={"/Services"}>Investment Certificate Service</NavLink>
              <NavLink to={"/Services"}>Business Registration Certificate Service</NavLink>
              <NavLink to={"/Services"}>Work Permit Service</NavLink>
              <NavLink to={"/Services"}>Business consulting service</NavLink>
              <NavLink to={"/Services"}>Financial services - Accounting</NavLink>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-white font-medium text-xl">Company</h2>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/Contact"}>Contact us</NavLink>
              <NavLink to={"/Blogs"}>Blog</NavLink>
              <NavLink to={"/Services"}>Service</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
