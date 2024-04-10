import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#B2FFB7]">
      <div className="p-6 flex flex-col lg:flex-row justify-between">
        <div className="font-bold text-4xl text-black w-full lg:w-[25%] mb-6 lg:mb-0">
          <span>&copy;</span>
        </div>
        <div className="w-full lg:w-[25%] mb-6 lg:mb-0">
          <span className="font-bold text-sm text-black">
            CRAVE CREATIVE GROUP HQ
          </span>
          <br />
          <br />
          <span className="text-xl text-gray-500">
            Nirmana Building 164 student Park Rd Noordiand
          </span>
          <br />
          <br />
          <span className="font-bold text-sm text-black">CONTACT</span>
          <br />
          <br />
          <a href="">
            <span className="text-xl text-gray-500">
              PH &nbsp;&nbsp;+8392722939
            </span>
          </a>
          <br />
          <a href="">
            <span className="text-xl text-gray-500">
              EM &nbsp;&nbsp;hei@crave.com
            </span>
          </a>
        </div>
        <div className="font-bold text-sm text-black w-full lg:w-[25%] mb-6 lg:mb-0">
          <span>HOW IT WORKS</span> <br />
          <br />
          <span>STORIES</span> <br />
          <br />
          <span>EXPLORE</span> <br />
          <br />
          <span>DESIGNER</span> <br />
          <br />
          <span>SHOP</span>
        </div>
        <div className="w-full lg:w-[25%] text-gray-500 font-bold text-sm">
          <span>TERMS AND CONDITION</span>
          <br />
          <br />
          <span>PRIVACY POLICY</span>
          <br />
          <br />
          <span>INVESTOR PRIVACY NOTICE</span>
          <br />
          <br />
          <span>COOKIES POLICY</span>
          <br />
          <br />
          <br />
          <span className="font-bold text-sm text-black">
            NEWSLETTER SIGNUP
          </span>
          <br />
          <br />
          <div>
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="text-[10px] w-full lg:w-auto h-9 rounded-sm pt-2 pb-2 pl-2 pr-2 bg-[#B2FFB7] border border-black"
            />

            <button className=" mt-[-2px]   absolute right-[20px] lg:right-[28%]">
              <FaArrowAltCircleRight
                size={25}
                color="gray"
                className="mt-2   absolute right-[30px] lg:right-[28%]"
              />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[25%] flex justify-between mt-4 lg:mt-0">
          <a href="https://www.linkedin.com">
            <Image
              src={"/icons/linkedin.svg"}
              alt="linkedin"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.facebook.com">
            <Image
              src={"/icons/facebook.svg"}
              alt="facebook"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.youtube.com">
            <Image
              src={"/icons/youtube.svg"}
              alt="youtube"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
      <div className="text-[5rem] lg:text-[12rem] text-white font-bold text-center">
        <span>CRAVE</span>
      </div>
      <div className="p-6 flex flex-col lg:flex-row justify-between">
        <span className="font-bold text-sm text-gray-500 text-center lg:text-left">
          Design by <b className="text-black">&copy;Neuwebz</b>
        </span>
        <span className="font-bold text-sm text-gray-500 text-center lg:text-right">
          CRAVE Group. All Rights Reserved.
        </span>
        <span className="font-bold text-sm text-gray-500 text-center lg:text-left">
          &copy; 2024
        </span>
        <span className="font-bold text-black text-sm text-center lg:text-right">
          11:52 AM GMT+2
        </span>
      </div>
    </div>
  );
};

export default Footer;
