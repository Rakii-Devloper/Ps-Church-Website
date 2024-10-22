import React from 'react';

const AboutPage = () => {
  return (
    <div className="relative h-screen">
      <img className="absolute inset-0 object-cover w-full h-full z-0" src="./src/assets/bg1.jpg" alt="Background" />
      <div className="absolute inset-0 bg-black opacity-30 z-0" /> {/* Overlay for better text contrast */}
      <div className="container mx-auto flex flex-col justify-center items-center relative z-10 pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/** About Founder Card */}
          <div className=" p-4 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              className="rounded-full mx-auto mb-4 border-4 border-[#544042] w-32 h-32" // Smaller size
              src="./src/assets/Pastor1.jpg"
              alt="Pastor Evans West Qb"
              width={140}
              height={140}
            />
            <h2 className="text-xl text-[#544042] italic mb-2">About Founder</h2>
            <p className="text-sm text-[#544042] italic text-justify">
              Rev. Evans West Qb is the General Overseer of Power Sanctuary and the Director of “PowerHouse Evangelism Charitable and Religious Trust”. A Nigerian national now based in Chennai, India for over 30 years as a missionary evangelist, teacher, and Pastor. A qualified Automotive Engineering.
            </p>
          </div>

          {/** About Power Sanctuary Card */}
          <div className=" p-4 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              className="rounded-full mx-auto mb-4 border-4 border-[#544042] w-32 h-32" // Smaller size
              src="./src/assets/church2.jpg"
              alt="Power Sanctuary"
              width={140}
              height={140}
            />
            <h2 className="text-xl text-[#544042] italic mb-2">About Power Sanctuary</h2>
            <p className="text-sm text-[#544042] italic text-justify">
              The church “Power Sanctuary” is a part of “PowerHouse Evangelism Charitable and Religious Trust ministries. Legally registered and its income is audited annually by a government-approved chartered accountant. The Lord impressed upon his heart while praying in 1992 to start church-based ministries and to plant churches.
            </p>
          </div>

          {/** About Our Vision Card */}
          <div className=" p-4 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              className="rounded-full mx-auto mb-4 border-4 border-[#544042] w-32 h-32" // Smaller size
              src="./src/assets/our-vision.jpeg"
              alt="Our Vision"
              width={140}
              height={140}
            />
            <h2 className="text-xl text-[#544042] italic mb-2">About Our Vision</h2>
            <p className="text-sm text-[#544042] italic text-justify">
              To build a ‘Sanctuary of worship and praise’ where people will gather with pride and look forward with joyful anticipation to worship the Lord without fear of intimidation, prejudice, and any social inequality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
