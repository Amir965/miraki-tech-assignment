import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="cta-section">
      {/* <Image
        src={"/nav/header-image.jpg"}
        fill
        alt="header-image"
        className="opacity-50"
      /> */}
      <div className="pt-4 lg:pl-20 pl-16 absolute top-[20%] lg:top-[40%] left-0 lg:left-[60%]">
        <div className="font-bold text-xl text-white">
          <span>WE LISTEN, WE CREATE,</span>
          <br />
          <span>YOU ENJOY, WHERE</span>
          <br />
          <span>DIMENSION TAKE</span>
          <br />
          <span>SHAPE.</span>
        </div>
        <div className="flex justify-between">
          <div className="absolute  lg:left-[-200%] text-[2rem] lg:text-[5rem] font-bold leading-none">
            <span>-LETS</span>
            <br />
            <span className="text-[#B2FFB7]">COLLABORATE</span>
          </div>
          <div className="relative group mt-[40px] lg:mt-0">
            <button className="bg-[#B2FFB7] hover:bg-blue-600 text-black font-bold py-2 px-6  inline-flex items-center mt-10">
              Connect &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="ml-1">&#43;</span>
            </button>
            <div className="absolute top-full left-0 bg-white shadow-md rounded p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">
              <a href="mailto:www.gmail.com">www.gmail.com</a>
              <br />
              <a href="tel:+917903991435">7903991435</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
