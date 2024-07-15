
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from "./components/About";
import Home from "./components/Home";  // Import the new page
import Our_Team from './components/Our_Team';
import Contact from './components/Contact';
import ErrorFour from './components/page_Not';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />       {/* Define the route for Home */}
          <Route path="/about" element={<About />} /> {/* Define the route for About */}
          <Route path="/team" element={<Our_Team />} /> {/* Define the route for About */}
          <Route path="/Contact" element={<Contact />} /> {/* Define the route for About */}
          <Route path="/ErrorFour" element={<ErrorFour />} /> {/* Define the route for About */}
           
        </Routes>
      </div>
    </Router>
  );
}





  
  



