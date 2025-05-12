import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardWrapper from './CardWrapper';
function Home() {
  return (
  <div classname='cards'>
    <CardWrapper/>
    </div>
  );
}

function About() {
  return <h2>ℹ️ About Page</h2>,<p>i am nikhita,iam pursing BCA</p>;
  
}

function Contact() {
  return <h2>📞 Contact Page</h2>,<p>
  Email us at: <a href="mailto:example@example.com">example@example.com</a><br/>
contact no:476159872</p>;
 
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;