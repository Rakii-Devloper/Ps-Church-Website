import React from 'react';

const ContactPage = () => {
  return (
    <div className="relative h-screen">
      <img className="absolute inset-0 object-cover w-full h-full z-0" src="./src/assets/bg1.jpg" alt="Background" />
      <div className="container mx-auto flex flex-col justify-center items-center relative z-10 p-6">
        <p className="text-lg text-[#544042] italic mb-6 text-shadow-lg">
          You are most Welcome to Power Sanctuary Of Praise And Worship Chennai India. It will be our Pleasure And
          Honour to have you Fellowship with us. Power Sanctuary believes in the Power Of The Blood Of Jesus, Worship
          with Dance, Instruments And Signs and Wonders Of the Blessed Holy Spirit. Come Join Us And Be Blessed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl text-[#544042] italic mb-2">Contact Address:</h3>
            <hr className="border-t border-gray-400 mb-2" />
            <p className="text-lg text-[#544042] italic">
              Power Sanctuary of Praise and Worship,<br />
              3/20 A-B Ponniaman Koil Street,<br />
              Cantonment Pallavaram,<br />
              Chennai 600 043,<br />
              Tamil Nadu,<br />
              India.
            </p>
          </div>

          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl text-[#544042] italic">Phone Number:</h3>
            <p className="text-lg text-[#544042] italic">+91-44-22640109</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
