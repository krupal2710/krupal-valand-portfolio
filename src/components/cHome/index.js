import React, { useEffect, useState } from "react";
import { Download, Facebook, Linkedin, Github, Dribbble } from "lucide-react";

const stats = [
  { count: 14, label: "Years of\nExperience" },
  { count: 50, label: "Projects\nCompleted" },
  { count: 250, label: "Happy\nClients" },
  { count: 10, label: "Awards\nWon" },
];

const Home = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const durations = 1000; // 1 second
    const steps = 30; // number of animation frames
    const interval = durations / steps;

    const counters = stats.map((stat, index) => {
      let stepCount = 0;
      const increment = stat.count / steps;

      const timer = setInterval(() => {
        stepCount++;
        setCounts((prev) =>
          prev.map((val, i) =>
            i === index
              ? Math.min(Math.round(increment * stepCount), stat.count)
              : val,
          ),
        );

        if (stepCount >= steps) clearInterval(timer);
      }, interval);

      return timer;
    });

    return () => counters.forEach(clearInterval);
  }, []);

  return (
    <section
      id="home"
      className="bg-darkbackground text-white py-16 px-4 md:px-8  "
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1 mt-12 text-center lg:text-left">
          <span className="text-gradient-1 text-2xl md:text-3xl mt-6 font-extrabold block mb-2 font-primary">
            I am Krupal Valand
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gradient-1 font-primary">
            Full Stack Developer
            {/* <span className="text-white">+</span> */}
          </h1>
          <span className="text-gradient-1 text-5xl md:text-7xl font-bold font-primary  mt-2">
            UX Designer
          </span>

          <p className="text-gray-300 mt-10 text-base md:text-lg font-primary">
            Passionate Full Stack Developer specializing in end-to-end
            application development. I create efficient, responsive, and
            high-performance systems that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <div className="relative group inline-block">
              {/* Simulated shadow glow using gradient-1 */}
              <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-md bg-gradient-1 z-0" />

              {/* Actual button */}
              <button className="relative w-50 font-primary text-center text-xl z-10 bg-[#6C5CE7] hover:bg-[#5a4ed1] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition">
                Download CV <Download className="w-4 h-4" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 ">
              {[Facebook, Linkedin, Github, Dribbble].map((Icon, index) => (
                <div
                  key={index}
                  className="group w-10 h-10 rounded-full border-2 border-primarytext flex items-center justify-center cursor-pointer 
                 transition-transform duration-300 transform hover:-translate-y-2  hover:bg-[#6C5CE7] hover:border-primarytext"
                >
                  <Icon className="w-5 font-primary h-5 text-primarytext transition group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 relative flex justify-center items-center mt-10 lg:mt-0">
          <div className="rounded-3xl shadow-lg overflow-hidden w-full lg:max-w-4xl">
            <img
              src="https://gerold.wuaze.com/img/img01.jpg"
              alt="Profile"
              className="rounded-3xl object-cover w-full transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          {/* Floating Badges */}
          {/* Floating Badges (Visible only on large screens and above) */}
          <span className="hidden lg:block absolute top-4 left-1 font-primary mt-10 bg-[#6C5CE7]/20 backdrop-blur-md px-4 py-3 rounded-xl text-md translate-10 font-semibold shadow-lg animate-float">
            <code className="mr-1">&lt;/&gt;</code> Full Stack Dev
          </span>

          <span className="hidden lg:flex absolute bottom-4 font-primary right-1 bg-[#6C5CE7]/20 backdrop-blur-md px-4 py-3 mb-10 rounded-xl text-md translate font-semibold shadow-lg items-center gap-2 animate-floatReverse">
            🎨 UI/UX Design
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 ">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#111124] rounded-2xl py-7 px-6 w-full sm:w-[280px] text-center shadow-md hover:bg-[#1E1B3F] hover:scale-105"
          >
            <h2 className="text-4xl font-primary font-extrabold text-primarytext">
              {counts[idx]}
            </h2>
            <p className="text-[#d1d1d1] font-primary whitespace-pre-line font-md  text-base mt-4">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
