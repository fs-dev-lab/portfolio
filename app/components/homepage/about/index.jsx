// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative scroll-mt-[140px]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid justify-center grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="text-gray-200 text-sm lg:text-xl">
            {personalData.description1}
          </p>
          <p className="text-gray-200 text-sm lg:text-xl">
            {personalData.description2}
          </p>
        </div>
        {/* <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt={personalData.name}
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div> */}
      </div>
    </div>
  );
}

export default AboutSection;
