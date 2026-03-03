import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Hero, Services, FoundersBrief } from './components/HomeSections';
import About from './pages/About';
import Process from './pages/Process';

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Services />
    <FoundersBrief />
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/processo" element={<Process />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
