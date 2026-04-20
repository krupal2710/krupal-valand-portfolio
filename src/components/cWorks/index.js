import { useState } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    category: "Web",
    img: "/images/carwash.png",
    tag: "MERN Stack",
    title: "Doorstap Carwash",
    description:
      "A comprehensive car wash booking and management platform that simplifies the process for both service providers and customers.",
    link: "https://door-step-car-wash-frontend.vercel.app/",
  },
  {
    category: "Web",
    img: "/images/healthcare.png",
    tag: "React JS",
    title: "HealthCare",
    description:
      "A modern healthcare service platform designed for seamless patient registration, appointment scheduling, and record management.",
    link: "https://health-care-two-pied.vercel.app/",
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects;

  return (
    <section id="works" className="bg-[#0A0A1A] py-16 px-6 text-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-5xl font-bold mb-10">
          <span className="text-white text-gradient-1 bg-clip-text text-transparent font-primary">
            My Recent
          </span>{" "}
          Works
        </h2>

        {/* Filters */}

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-6 font-primary">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative hover:cursor-pointer w-[300px] h-[220px] md:w-[350px] md:h-[260px] rounded-2xl overflow-hidden group shadow-lg"
            >
              <img
                src={project.img}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0  group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <span className="inline-block bg-[#181830] text-purple-400 text-xs px-3 py-1 rounded-full mb-2 w-max">
                  {project.tag}
                </span>
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-purple-400 text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  View Project <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
