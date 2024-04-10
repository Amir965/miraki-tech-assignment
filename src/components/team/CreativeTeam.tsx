import Separator from "../seperator/Separator";
import TeamCarousel from "./TeamCarousel";

const images = [
  {
    src: "/team/team1.jpg",
    title: "NOOR AINI AZIZOVIC",
    description: "MANAGING DIRECTOR",
    media: "NOOROK",
    url: "/icons/facebook.svg",
  },
  {
    src: "/team/team2.jpg",
    title: "NOOR AINI",
    description: "PRODUCT MANAGER",
    media: "AINI",
    url: "/icons/facebook.svg",
  },
  {
    src: "/team/team3.jpg",
    title: "JOHN DEO",
    description: "CEO",
    media: "JHON",
    url: "/icons/facebook.svg",
  },
  {
    src: "/team/team4.jpg",
    title: "NOOR AINI AZIZOVIC",
    description: "MANAGING DIRECTOR",
    media: "NOOROK",
    url: "/icons/facebook.svg",
  },
  {
    src: "/team/team5.jpg",
    title: "AMILYA JONSHON",
    description: "CTO",
    media: "JONSHON",
    url: "/icons/facebook.svg",
  },
  {
    src: "/team/team6.jpg",
    title: "MIKLE CLARK",
    description: "SITE ENGINEER",
    media: "CLARK",
    url: "/icons/facebook.svg",
  },
  {
    src: "/team/team4.jpg",
    title: "AZIZOVIC",
    description: "MANAGING DIRECTOR",
    media: "AZIZOVIC",
    url: "/icons/facebook.svg",
  },
];
const CreativeTeam: React.FC = () => {
  return (
    <div className="pt-6 " id="team">
      <Separator />
      <div className="pl-4 pr-4 lg:pl-20 lg:pr-18">
        <div className="mb-4 lg:mb-0 mt-10">
          <span className="bg-[#B2FFB7] rounded-full inline-block p-3 "></span>
          &nbsp;&nbsp;&nbsp;
          <span className="text-[#B2FFB7] font-bold absolute">TEAM</span>
        </div>
        <div className="pt-6 pb-6 lg:pt-0 lg:pb-0 lg:pl-20 lg:pr-10 flex justify-center lg:justify-end">
          <div className="font-bold leading-none text-[3rem] lg:text-[5rem]">
            <span className="text-gray-500">-CREATIVE</span>
            <br />
            &nbsp;&nbsp;<span className="text-[#B2FFB7]">TEAM</span>
          </div>
        </div>
        <div className="font-bold w-full lg:w-[35%] ml-0 lg:ml-[10%]">
          <span>
            OUR TEAM IS CONSTANTLY EXPLORING INNOVATIVE MATERIALS, SUSTAINABLE
            PRACTICES, AND CUTTING-EDGE TECHNOLOGIES TO MAKE YOUR SPACE NOT ONLY
            AESTHETICALLY PLEASING BUT ALSO FUNCTIONAL AND ECO-FRIENDLY.
          </span>
        </div>
        <div className="container mx-auto mt-8 overflow-x-hidden">
          <TeamCarousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default CreativeTeam;
