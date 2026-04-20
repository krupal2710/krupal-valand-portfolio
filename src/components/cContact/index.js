import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0A0A1A] text-white py-20 px-6">
      <div className="max-w-screen-xl mx-auto text-center mb-12 font-primary">
        <h2 className="text-5xl font-bold mb-2 ">
          Let's work <span className="text-gradient-1">together!</span>
        </h2>
        <p className="text-gray-400 mt-7">Just simple like that!</p>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap gap-10">
        {/* Left Form Box */}
        <div className="w-full md:w-2/3 bg-[#111129] rounded-2xl p-8 font-primary">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First name"
              className="bg-transparent border border-[#1F1F3D] text-white px-4 py-3 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-transparent border border-[#1F1F3D] text-white px-4 py-3 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border border-[#1F1F3D] text-white px-4 py-3 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="bg-transparent border border-[#1F1F3D] text-white px-4 py-3 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Select Field */}
            <div className="relative col-span-1 md:col-span-2">
              <select
                defaultValue=""
                className="appearance-none w-full bg-[#111129] border border-[#1F1F3D] text-white px-4 py-3 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" disabled hidden>
                  --Please choose an option—
                </option>
                <option className="bg-[#111129]" value="Web Design">
                  Web Design
                </option>
                <option className="bg-[#111129]" value="Web Development">
                  Web Development
                </option>
                <option className="bg-[#111129]" value="UI/UX">
                  UI/UX
                </option>
                <option className="bg-[#111129]" value="Branding">
                  Branding
                </option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                ▼
              </div>
            </div>

            <textarea
              placeholder="Your message"
              rows="4"
              className="col-span-1 md:col-span-2 bg-transparent border border-[#1F1F3D] text-white px-4 py-3 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-purple-500 hover:bg-purple-600 transition text-white font-semibold py-3 px-6 rounded-lg w-fit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Info Box */}
        <div className="w-full md:w-1/3 bg-[#111129] rounded-2xl p-8 space-y-8 font-primary">
          <div className="flex items-start gap-4">
            <div className="bg-purple-500 p-3 rounded-full">
              <FaPhoneAlt className="text-white text-lg" />
            </div>
            <div>
              <h4 className="font-bold text-white">Phone</h4>
              <p className="text-gray-400 text-sm">+91 9898062469</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-purple-500 p-3 rounded-full">
              <FaEnvelope className="text-white text-lg" />
            </div>
            <div>
              <h4 className="font-bold text-white">Email</h4>
              <p className="text-gray-400 text-sm">krupalvaland29@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-purple-500 p-3 rounded-full">
              <FaMapMarkerAlt className="text-white text-lg" />
            </div>
            <div>
              <h4 className="font-bold text-white">Address</h4>
              <p className="text-gray-400 text-sm">
                Anand, Gujarat, India
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
