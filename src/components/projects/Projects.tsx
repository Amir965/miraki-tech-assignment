import Separator from "../seperator/Separator";
import ProjectCard from "./ProjectCard";

const ProjectImage = [
  {
    id: "1",
    image: "/projects/project1.jpg",
    number: "23",
    title: "RESIDENTIAL PROJECTS",
  },
  {
    id: "2",
    image: "/projects/project2.jpg",
    number: "234",
    title: "ONGOING PROJECTS",
  },
  {
    id: "3",
    image: "/projects/project3.jpg",
    number: "123",
    title: "COMMERCIAL PROJECTS",
  },
  {
    id: "4",
    image: "/projects/project4.jpg",
    number: "253",
    title: "CONSUMER PROJECTS",
  },
  {
    id: "5",
    image: "/projects/project5.jpg",
    number: "50",
    title: "INSURANCE PROJECTS",
  },
  {
    id: "6", 
    image: "/projects/project6.jpg", 
    number: "53",
    title: "RENTAL PROJECTS",
  },
];
const Projects: React.FC = () => {
  return (
    <div className="pt-6 " id="numbers">
      <Separator />
      {/* Shared Header */}
      <div className="px-4 md:pl-20 md:pr-20">
        <div className="flex items-center pt-10">
          <span className="bg-[#B2FFB7] rounded-full inline-block p-3 "></span>
          <span className="ml-3 text-[#B2FFB7] font-bold">IN NUMBERS</span>
        </div>

        {/* Desktop Content */}
        <div className="pt-6 pb-6 pl-20  flex justify-end">
          <div className="font-bold leading-none text-[2rem] lg:text-[5rem]">
            <span className="text-gray-500">-PROJECT</span>
            <br />
            <span className="text-[#B2FFB7]">IN NUMBERS</span>
          </div>
        </div>

        {/* Shared Project Card */}
        <div className="pt-6">
          <ProjectCard ProjectImage={ProjectImage} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
