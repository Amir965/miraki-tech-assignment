'use client'
import Image from "next/image";
import { useState } from "react"

interface ImageData{
    id: string;
    image: string;
    number: string;
    title: string;
}

interface ProjectProps{
    ProjectImage: ImageData[];
}
const ProjectCard:React.FC<ProjectProps> = ({ProjectImage}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:justify-between md:gap-0">
      {/* Each Project Card */}
      {ProjectImage.map((item, index) => (
        <div key={index} className="mb-4">
          <Image
            src={item.image}
            alt={item.title}
            width={250}
            height={250}
            className="project-image"
          />
          <div className="flex flex-col mt-[-15px] ml-4 w-[60%]">
            <span className="font-bold text-[#B2FFB7] text-xl">
              {item.number}
            </span>
            <span className="text-gray-400">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
