import {useState} from 'react';
import { ChevronRight, ArrowUp } from 'lucide-react';

const servicesarray = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points.',
    features: [
      'Custom Website Development',
      'Frontend & Backend Solutions',
      'E-commerce Development',
      'API Integration',
    ],
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences through research-driven design solutions.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Interaction Design',
      'Usability Testing',
    ],
  },
  {
    number: '03',
    title: 'Content Writing',
    description: 'Crafting compelling content that engages audiences and drives meaningful interactions.',
    features: [
      'SEO Optimized Content',
      'Technical Writing',
      'Copywriting',
      'Blogs & Articles',
    ],
  },
  {
    number: '04',
    title: 'Digital Marketing',
    description: 'Implementing strategic marketing solutions to increase visibility and drive growth.',
    features: [
      'Social Media Marketing',
      'Email Campaigns',
      'Google Ads',
      'Analytics & Reporting',
    ],
  },
];


const Services = () => {
      const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
   <section id='services' className="bg-[#0A0918] text-white py-20 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto text-center ">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-primary">My Quality</span>{' '}
          <span className="text-white font-primary">Services</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg font-primary">
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </p>

        {/* Services Cards */}
      <div className="mt-16 flex flex-col gap-8 items-center font-primary">
      {servicesarray.map((service, index) => (
        <div
          key={index}
          onClick={() => toggleCard(index)}
          className={`
            group w-full md:w-[70%] bg-[#111025] rounded-2xl px-6 py-8
            transition-all duration-500 overflow-hidden cursor-pointer
            relative border-purple-500 border-[1.2px]
            ${activeIndex === index ? 'h-[250px]' : 'hover:h-[250px] h-[150px]'}
          `}
        >
          <div className="flex items-start justify-between gap-6">
            {/* Left */}
            <div className="flex items-start gap-6">
              <div className="text-4xl font-bold text-purple-800">{service.number}</div>
              <div>
                <h3 className="text-3xl font-semibold text-left mb-2">{service.title}</h3>
                <p className="text-gray-400 text-md text-left">{service.description}</p>

                {/* Features */}
                <ul className={`
                  mt-4 space-y-2 transition-all duration-500
                  ${activeIndex === index ? 'opacity-100 translate-y-0' : 'group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4'}
                `}>
                  {service.features?.map((item, i) => (
                    <li key={i} className="text-sm text-purple-300 flex items-center gap-2">
                      <span className="text-purple-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chevron */}
            <div className={`
              w-10 h-10 shrink-0 rounded-full flex items-center justify-center border
              transition-colors duration-300
              ${activeIndex === index
                ? 'bg-purple-600 text-white'
                : 'border-purple-600 text-purple-500 group-hover:bg-purple-600 group-hover:text-white'}
            `}>
              <ChevronRight size={25} />
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
};

export default Services;
