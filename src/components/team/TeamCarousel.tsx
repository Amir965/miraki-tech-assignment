"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
interface ImageData {
  src: string;
  title: string;
  description: string;
  media: string;
  url: string;
}

interface CarouselProps {
  images: ImageData[];
}

const TeamCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setStartIndex((prevStartIndex) => Math.max(prevStartIndex - 5, 0));
  };

  const handleNext = () => {
    setStartIndex((prevStartIndex) =>
      Math.min(prevStartIndex + 5, images.length - 5)
    );
  };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="relative">
      <div className="flex  mt-4 ">
        {images.slice(startIndex, startIndex + 5).map((image, index) => (
          <div
            key={startIndex + index}
            className={`relative flex-shrink-0 mr-8 ml-8 ${
              hoverIndex === startIndex + index ? "ml-2" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(startIndex + index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={image.src}
              alt={image.title}
              width={200}
              height={200}
              className={`object-cover w-40 h-40 sm:w-55 sm:h-55 transition-transform duration-300 ${
                hoverIndex === startIndex + index ? "scale-150" : "scale-100"
              }`}
            />
            {hoverIndex === startIndex + index && (
              <div className="absolute top-[162px] left-[-41px] right-0 p-4 bg-gray-700  text-white bottom-0 h-[130px] w-[240px]">
                <div className="absolute top-[-20px] right-0 rounded-full bg-[#B2FFB7] p-1 ">
                  <span className="inline-block p-2 font-bold hover:bg-blue-600 text-white">
                    More
                  </span>
                </div>
                <h2 className="text-xl font-bold mt-3 cursor-pointer">
                  {image.title}
                </h2>
                <p className="text-sm mt-2">{image.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <Image
                    src={image.url}
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                  <p className="text-sm">{image.media}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center mt-[150px] mb-6">
        <button
          className="mr-2 cursor-pointer"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          <FaArrowAltCircleRight size={25} color="gray" className="" />
        </button>
        <button
          className="ml-2 cursor-pointer"
          onClick={handleNext}
          disabled={startIndex === images.length - 5}
        >
          <FaArrowAltCircleLeft size={25} color="gray" className="" />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
