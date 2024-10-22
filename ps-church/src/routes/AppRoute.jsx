import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NavBarUi from '../components/NavBarUi';
import ContactPage from '../pages/ContactPage';
import SermonPage from '../pages/SermonPage';
import SideBarUi from '../components/SideBarUi';
import OurBelief from '../pages/OurBelief';
import VideoPage from '../pages/VideoPage';
import EventPage from '../pages/EventPage';
import AboutPage from '../pages/AboutPage';

const AppRoute = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBarUi toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBarUi isOpen={isOpen} toggleSidebar={toggleSidebar} />
        
        {/* Main content */}
        <main className={`flex-grow transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-belief" element={<OurBelief />} />
            <Route path="/sermon" element={<SermonPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/about" element={<AboutPage />} />

          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AppRoute;
