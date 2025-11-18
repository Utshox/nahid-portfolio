import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SelpCaseStudy from './pages/SelpCaseStudy';
import LeadyApp from './pages/LeadyApp';
import MfWebPortal from './pages/MfWebPortal';
import CourseManagementLms from './pages/CourseManagementLms';
import '../styles/main.css';

function App() {
  return (
    <Router>
      <div id="artboard">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mis-selp" element={<SelpCaseStudy />} />
          <Route path="/leady-app" element={<LeadyApp />} />
          <Route path="/mf-web-portal" element={<MfWebPortal />} />
          <Route path="/course-lms" element={<CourseManagementLms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
