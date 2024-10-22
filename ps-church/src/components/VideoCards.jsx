import React from 'react';

const VideoCards = () => {
  return (
    <div className="flex flex-col m-4">
      {/* Video Player Section */}
      <div className="flex-1 flex justify-center items-center">
        <video
          className="w-full p-10 max-w-2xl rounded-lg"
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Recent Heading */}
      <h2 className="text-2xl font-bold text-left p-3">Recent</h2>

      {/* Video Cards Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-3/4">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="relative group">
              <video
                className="w-full object-cover rounded-lg"
                src={`https://www.w3schools.com/html/mov_bbb.mp4`}
                muted
                loop
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 text-transparent border border-blue-500 bg-transparent hover:bg-blue-500 hover:text-white transition duration-300 rounded">
                  Watch
                </button>
                <h3 className="text-white text-lg font-[cursive] mt-2 group-hover:text-blue-400 transition-all duration-300">
                  Video Title {index + 1}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
