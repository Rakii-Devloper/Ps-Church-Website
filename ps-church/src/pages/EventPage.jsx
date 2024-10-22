import React from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion for animations

const EventPage = () => {
  const events = [
    { day: 'Sunday', event: 'Church Worship service', time: '09:00 AM' },
    { day: 'Monday', event: 'Fasting and Prayer on first week of the month', time: '10:00 AM' },
    { day: 'Tuesday', event: 'Fasting and Prayer', time: '10:00 AM' },
    { day: 'Wednesday', event: 'Bible Study', time: '06:00 PM' },
    { day: 'Thursday', event: "Sister's Fasting and Prayer", time: '11:00 AM' },
    { day: 'Friday', event: 'Church House Fellowship', time: '06:00 PM' },
    { day: 'Saturday', event: 'Gospel and Deliverance Meeting', time: '06:00 PM' },
  ];

  const specialPrograms = [
    { day: 'Monthly 3rd Friday', event: 'All Night Prayer', time: '10:00 PM' },
    { day: 'Monthly 3rd Sunday or 4th Sunday', event: 'Worship Service & Fellowship Lunch', time: '09:00 PM' },
  ];

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('./src/assets/bg1.jpg')" }}>
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-3 text-center text-success font-semibold mb-4">
          <div className="text-lg">Day</div>
          <div className="text-lg">Event</div>
          <div className="text-lg">Time</div>
        </div>
        <hr className="border-t border-gray-600 mb-4" />

        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className="grid grid-cols-3 text-center mb-4 transition-transform duration-500 hover:scale-105" // Adding hover scaling effect
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} // Fade-in effect
          >
            <div className="font-italic text-lg text-gray-800">{event.day}</div>
            <div className="font-italic text-lg text-gray-800">{event.event}</div>
            <div className="font-italic text-lg text-gray-800">{event.time}</div>
          </motion.div>
        ))}

        <div className="text-center text-lg text-success font-semibold my-8">
          Special Program
        </div>
        <hr className="border-t border-gray-600 mb-4" />

        {specialPrograms.map((program, index) => (
          <motion.div 
            key={index} 
            className="grid grid-cols-3 text-center mb-4 transition-transform duration-500 hover:scale-105" // Adding hover scaling effect
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} // Fade-in effect
          >
            <div className="font-italic text-lg text-gray-800">{program.day}</div>
            <div className="font-italic text-lg text-gray-800">{program.event}</div>
            <div className="font-italic text-lg text-gray-800">{program.time}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
