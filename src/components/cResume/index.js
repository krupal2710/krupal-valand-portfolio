import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
  { year: "2022 – Present", role: "LEAD DEVELOPER", company: "Blockstats, London" },
  { year: "2021 – 2022", role: "FULL STACK WEB DEVELOPER", company: "Parsons, The New School" },
  { year: "2020 – 2021", role: "UI DESIGNER", company: "House of Life, Leeds" },
];

const educationData = [
  { year: "2020 – 2023", role: "PROGRAMMING COURSE", company: "Harvard University" },
  { year: "2016 – 2020", role: "GRAPHIC DESIGN COURSE", company: "University of Denmark" },
  { year: "2012 – 2015", role: "WEB DESIGN COURSE", company: "University of California" },
];

const TimelineItem = ({ year, role, company }) => (
  <div className="relative pl-6 border-l-2 border-purple-500 pb-10 font-primary">
    <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-purple-500" />
    <p className="text-sm text-purple-400 mb-2">{year}</p>
    <div className="bg-[#14122F] rounded-xl px-5 py-4 transition-transform duration-300 hover:scale-95 hover:bg-[#1E1B3F] hover:shadow-[0_0_20px_#13132A]">
      <h4 className="text-white font-semibold text-base sm:text-lg">{role}</h4>
      <p className="text-gray-400 text-sm mt-1">{company}</p>
    </div>
  </div>
);

const Resume = () => {
  return (
    <section id="resume" className="bg-[#0A0A1A] py-16 px-4 sm:px-6 md:px-8 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 flex-wrap">
        {/* Experience */}
        <div className="w-full lg:w-1/2 font-primary">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center gap-2 mb-10">
            <Briefcase size={24} className="text-purple-400 mt-2 sm:mt-4" />
            <span>My</span>
            <span className="text-transparent bg-clip-text bg-gradient-1">Experience</span>
          </h2>
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>

        {/* Education */}
        <div className="w-full lg:w-1/2 font-primary">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center gap-2 mb-10">
            <GraduationCap size={26} className="text-purple-400 mt-2 sm:mt-4" />
            <span>My</span>
            <span className="text-transparent bg-clip-text bg-gradient-1">Education</span>
          </h2>
          {educationData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
