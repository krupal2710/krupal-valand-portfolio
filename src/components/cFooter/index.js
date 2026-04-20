import React from "react";

import { Download, Facebook, Linkedin, Github, Dribbble } from "lucide-react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0c0b1d] text-white pt-16 px-6 font-primary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-16">
        {/* Brand & Description */}
        <div className="space-y-7">
          <h2 className="text-4xl font-bold font-primary text-white">
            Taylor<span className="text-indigo-500">.</span>
          </h2>
          <p className="text-gray-400 mt-4 font-primary leading-relaxed">
            Creating digital experiences that inspire and innovate. Let's build
            something amazing together.
          </p>
          <div className="flex gap-4 ">
            {[Facebook, Linkedin, Github, Dribbble].map((Icon, index) => (
              <div
                key={index}
                className="group w-10 h-10 font-primary rounded-full border-2 border-primarytext flex items-center justify-center cursor-pointer transition hover:-translate-y-2 hover:bg-[#6C5CE7] hover:border-primarytext"
              >
                <Icon className="w-5 h-5 text-primarytext transition group-hover:text-white " />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 font-primary">
            Quick Links
          </h4>
          <ul className="text-gray-400 space-y-5">
            {["Home", "Resume", "Services", "Works", "Contact"].map(
              (text, idx) => (
                <li key={idx} className="font-primary">
                  <span className="inline-block cursor-pointer transition-transform duration-500 hover:text-primarytext hover:scale-90">
                    {text}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        {/* <div>
  <h4 className="text-lg font-semibold mb-4 font-primary">Services</h4>
  <ul className="text-gray-400 space-y-5">
    {["Web Design", "Development", "UI/UX Design", "Branding", "SEO"].map((text, idx) => (
      <li key={idx} className="font-primary">
        <span className="inline-block cursor-pointer transition-transform duration-500 hover:text-primarytext hover:scale-90">
          {text}
        </span>
      </li>
    ))}
  </ul>
</div> */}

        {/* Newsletter */}
        <div className="space-y-5">
          <h4 className="text-lg font-semibold mb-4 font-primary">
            Newsletter
          </h4>
          <p className="text-gray-400 mb-4 font-primary">
            Subscribe to get the latest news and updates.
          </p>
          <div className="flex items-center bg-[#1e1d34] rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white px-4 py-3 outline-none w-full"
            />
            <button className="bg-indigo-500 p-3 rounded-md mr-1 font-primary hover:bg-indigo-600">
              <IoIosSend className="text-white text-md " />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t font-primary border-gray-800 pt-6 pb-4 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p>2025 Taylor. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
