import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './src/about';
import Contact from './src/contact';
import Education from './src/education';
import Project from './src/project';
import Layout from './components/Layout';
import myImage from './public/images.png';
import Services from './src/services';

const MainRouter = () => {
  return (
    <div>
      <Layout />

      
      <div style={{ textAlign: 'left', margin: '20px 0' }}>
        <img 
          src={myImage} 
          alt="My Image" 
          style={{ width: '50px', height: '100px' }} 
        />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default MainRouter;

{/* MainRouter component that sets up the routes for the application */}