import Image from "next/image";
import Separator from "../seperator/Separator";

const About = () => {
  return (
    <div className="mt-[30px] lg:mt-[250px] md:mt-[430px]">
      <Separator />
      <div className="pt-10 pb-10 pl-4 pr-4 " id="about">
        {/* Mobile View */}
        <div className="sm:hidden">
          <div className="flex">
            <span className="bg-[#B2FFB7] rounded-full inline-block p-3"></span>

            <span className="text-[#B2FFB7] font-bold block pl-2">
              ABOUT THE STUDIO
            </span>
          </div>
          <div className="text-center mt-4">
            <Image
              src={"/nav/about-image1.jpg"}
              alt="about-image1"
              width={300}
              height={300}
            />
          </div>
          <div className="text-center mt-4 font-bold text-lg">
            <div>
              <span>WE LISTEN</span>
              <br />
              <span>WE CREATE,</span>
              <br />
              <span>YOU ENJOY</span>
              <br />
              <span>WHERE DIMENSIONS TAKE</span>
              <br />
              <span>SHAPE</span>
            </div>
          </div>
          <div className="p-4 text-[15px] text-[#9d9b9b] font-bold">
            Founded by visionary architects with a shared desire to redefine the
            boundaries of architecture, Crave Architecture Studio was
            established in 2017. From our humble beginning, we've grown into a
            dynamic, multidisciplinary team of design enthusiasts who constantly
            push the envelope of creativity and innovation.
          </div>
          <div className="text-center">
            <h1 className="text-[5rem] lg:text-[13rem] font-extrabold text-[#474747]">
              CRAVE
            </h1>
            <Image
              src={"/nav/about-image2.jpg"}
              alt="about-image2"
              width={300}
              height={150}
              className="mt-[-13%] mx-auto"
            />
          </div>
        </div>

        {/* Tablet and Desktop View */}
        <div className="hidden sm:block">
          <div className="pt-4 pl-20 flex justify-between">
            <div>
              <span className="bg-[#B2FFB7] rounded-full inline-block p-3 "></span>
              &nbsp;&nbsp;&nbsp;
              <span className="text-[#B2FFB7] font-bold absolute">
                ABOUT THE STUDIO
              </span>
            </div>
            <div>
              <Image
                src={"/nav/about-image1.jpg"}
                alt="about-image1"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex justify-center font-bold text-3xl">
            <div>
              <span>WE LISTEN</span>
              <br />
              <span>WE CREATE,</span>
              <br />
              <span>YOU ENJOY</span>
              <br />
              <span>WHERE DIMENSIONS TAKE</span>
              <br />
              <span>SHAPE</span>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <span></span>
            <span className="w-[30%] text-[15px] text-[#9d9b9b] font-bold">
              Founded by visionary architects with a shared desire to redefine
              the boundaries of architecture, Crave Architecture Studio was
              established in 2017. From our humble beginning, we've grown into a
              dynamic, multidisciplinary team of design enthusiasts who
              constantly push the envelope of creativity and innovation.
            </span>
          </div>
          <div className="">
            <h1 className="text-[13rem] font-extrabold text-[#474747]">
              CRAVE
            </h1>
            <Image
              src={"/nav/about-image2.jpg"}
              alt="about-image2"
              width={400}
              height={200}
              className="mt-[-13%] ml-[30%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
