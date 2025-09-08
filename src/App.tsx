import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import People from './pages/People';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Projects from './pages/Projects';
import JoinUs from './pages/JoinUs';
import ContactUs from './pages/ContactUs';
import Publications from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;