import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="header-section">
      {/* Mobile and Tablet View */}
      <div className="sm:hidden">
        <div className="pt-4 pl-4 pr-4 opacity-100 font-bold text-[10px] lg:text-xl flex justify-between items-center">
          <div>
            <Link href={"/"} className="text-white font-bold">
              CRAVE
            </Link>
          </div>
          <div className="flex justify-between gap-[2px]">
            <Link href={"#about"} className="hover:text-[#B2FFB7]">
              ABOUT THE STUDIO
            </Link>
            <br />
            <Link href={"#featured"} className="hover:text-[#B2FFB7]">
              FEATURED
            </Link>
            <br />
            <Link href={"#numbers"} className="hover:text-[#B2FFB7]">
              IN NUMBERS
            </Link>
            <br />
            <Link href={"#team"} className="hover:text-[#B2FFB7]">
              TEAM
            </Link>
          </div>
          <div></div>
        </div>
        <div className="pt-4 pl-4 pr-4 font-bold text-white">
          <span className="bg-[#B2FFB7] rounded-full inline-block p-3 relative top-[4px]"></span>
          <span className="ml-2 text-2xl">BETTER LIVING</span>
          <br />
          <div className="flex justify-between items-center">
            <span className="ml-2 text-2xl">BEGINS</span>

            <span className="bg-[#B2FFB7] rounded-full w-14 h-14 font-bold text-black flex justify-center items-center ">
              MORE
            </span>
          </div>

          <span className="ml-2 text-2xl text-[#B2FFB7]">AT HOME</span>
          <div className="mt-2">
            <span>WE LISTEN,</span>
            <br />
            <span>WE CREATE, YOU ENJOY. WHERE</span>
            <br />
            <span>DIMENSION TAKE SHAPE</span>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block">
        <div className="flex justify-between pt-4 opacity-100 font-bold pl-20 pr-20">
          <div className="">
            <Link href={""} className="text-white font-bold">CRAVE</Link>
          </div>
          <div className="flex justify-between gap-4">
            <Link href={"#about"} className="hover:text-[#B2FFB7]">
              ABOUT THE STUDIO
            </Link>
            <Link href={"#featured"} className="hover:text-[#B2FFB7]">
              FEATURED
            </Link>
            <Link href={"#numbers"} className="hover:text-[#B2FFB7]">
              IN NUMBERS
            </Link>
            <Link href={"#team"} className="hover:text-[#B2FFB7]">
              TEAM
            </Link>
          </div>
        </div>

        <div className="absolute left-[80%] rounded-full bg-[#B2FFB7] p-3 top-80">
          <span className="inline-block p-6 text-black font-bold">More</span>
        </div>
        <div className="absolute top-[83%] left-[8%] font-bold flex">
          <div className="text-white">
            <span className="bg-[#B2FFB7] rounded-full inline-block p-3 relative top-[-20px] h-[40px] w-[40px]"></span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <span className="text-8xl">BETTER LIVING</span>
            <br />
            <span className="text-8xl">BEGINS</span>
            <br />
            <span className="text-8xl pl-[15%] text-[#B2FFB7]">AT HOME</span>
          </div>
          <div className="ml-2 text-white">
            <div className="relative top-[70%]">
              <span>WE LISTEN,</span>
              <br />
              <span>WE CREATE, YOU ENJOY. WHERE</span>
              <br />
              <span>DIMENSION TAKE SHAPE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
