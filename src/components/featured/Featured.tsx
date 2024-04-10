import Image from "next/image";
import Separator from "../seperator/Separator";

const Featured = () => {
  return (
    <div className="" id="featured">
      <Separator />
      {/* Desktop View */}
      <div className="pt-10 pb-10">
        <div className="hidden md:flex justify-between pt-4 pl-20 pr-20">
          <div className="">
            <span className="bg-[#B2FFB7] rounded-full inline-block p-3"></span>
            &nbsp;&nbsp;&nbsp;
            <span className="text-[#B2FFB7] font-bold absolute">FEATURED</span>
          </div>
          <Image
            src={"/nav/featured-image1.jpg"}
            alt="featured-image1"
            width={800}
            height={400}
            className="featured-image"
          />
        </div>

        {/* Mobile & Tablet View */}
        <div className="md:hidden">
          <div className="pt-4 pl-4 pr-4">
            <span className="bg-[#B2FFB7] rounded-full inline-block p-3 "></span>
            &nbsp;&nbsp;&nbsp;
            <span className="text-[#B2FFB7] font-bold absolute">FEATURED</span>
          </div>
          <div className="pt-4 pl-4 pr-4">
            <Image
              src={"/nav/featured-image1.jpg"}
              alt="featured-image1"
              width={400}
              height={200}
              className="featured-image"
            />
          </div>
        </div>

        {/* Shared Content */}
        <div className="font-bold leading-none text-[3rem] lg:text-[5rem] relative top-[-180px]">
          <span className="text-gray-500 pl-[8%]">-HOUSE (OF)</span>
          <br />
          &nbsp;&nbsp;<span className="text-[#B2FFB7] pl-[8%]">HIGHLAND</span>
        </div>
        <div className="flex pr-4 justify-end mt-[-10%]">
          <span className="text-gray-500 text-6xl font-bold">HOUSE</span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
