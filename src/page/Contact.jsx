import React from "react";
import ScrollTop from "../Components/ScrollTop";
import Label from "../Components/Label";
import { Link } from "react-router-dom";

const Contact = () => {

  return (
    <>
      <div className="text-[#002662] h-[100vh] bg-[url(https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?cs=srgb&dl=pexels-juan-pablo-serrano-arenas-1242348.jpg&fm=jpg)]">
        <div className="max-w-[1440px] mx-auto p-20">
          <div>
            <h1 className="font-bold text-4xl mb-10">Contact us</h1>
            <h4 className="text-xl mb-14">Speak to our experts</h4>
          </div>
          <div className="flex items-start p-10 justify-between flex-col-reverse tablet:flex-row gap-20">
            <div>
              <div className="flex flex-wrap max-w-[700px] mx-auto gap-5 mb-10">
                <Label name={"Full Name"}></Label>
                <Label name={"Email"}></Label>
                <Label name={"Phone Number"}></Label>
                <Label name={"Title"}></Label>
                <Label name={"Your request"}></Label>
              </div>
              <Link className="text-white px-20  py-4 bg-[#51BA61] mx-auto w-fit rounded-md block">
                Submit
              </Link>
            </div>

            <div>
              <h1>Other ways to get in touch with us</h1>
              <div className="flex gap-3 items-center">
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
              <div className="flex gap-3 items-center">
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
            </div>
          </div>
        </div>
      </div>
      <ScrollTop></ScrollTop>
    </>
  );
};

export default Contact;
