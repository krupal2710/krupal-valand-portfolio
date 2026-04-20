import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 bg-[#1e1b3f]/60 hover:bg-[#7B61FF] text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 shadow-lg"
    aria-label="Previous Slide"
  >
    <FaChevronLeft size={18} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 bg-[#1e1b3f]/60 hover:bg-[#7B61FF] text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 shadow-lg"
    aria-label="Next Slide"
  >
    <FaChevronRight size={18} />
  </button>
);

const Myskills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-[#E34F26] w-12 h-12 mb-4" />,
    percentage: 92,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-[#1572B6] w-12 h-12 mb-4" />,
    percentage: 80,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-[#F7DF1E] w-12 h-12 mb-4" />,
    percentage: 99,
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-[#777BB4] w-12 h-12 mb-4" />,
    percentage: 89,
  },
  {
    name: "React js",
    icon: <FaReact className="text-[#61DAFB] w-12 h-12 mb-4" />,
    percentage: 93,
  },
  {
    name: "Node js",
    icon: <FaNodeJs className="text-[#339933] w-12 h-12 mb-4" />,
    percentage: 89,
  },
  {
    name: "Express js",
    icon: <SiExpress className="text-white w-12 h-12 mb-4" />,
    percentage: 93,
  },
  {
    name: "MongoDb Atlas",
    icon: <SiMongodb className="text-[#47A248] w-12 h-12 mb-4" />,
    percentage: 93,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0A0A1A] text-white py-20 px-6">
      <div className="max-w-screen-xl mx-auto text-center font-primary">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-gradient-1">Skills</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container px-12 py-8"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          dotListClass="custom-dot-list-style"
          itemClass="px-2"
          pauseOnHover={true}
          renderArrowsWhenDisabled={true}
        >
          {Myskills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111129] border border-white/5 hover:border-[#7B61FF]/40 hover:bg-[#1E1B3F] rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[#7B61FF]/10 transition-all duration-300 mx-1 h-full group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <div className="relative w-24 h-24 mb-4">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#1F1F3D"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#9B5CFF"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="282.743"
                    strokeDashoffset={
                      282.743 - (282.743 * skill.percentage) / 100
                    }
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                  {skill.percentage}%
                </span>
              </div>
              <p className="text-white font-medium">{skill.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
