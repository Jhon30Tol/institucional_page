import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Hero, MissionStatement, Services } from './components/HomeSections';
import About from './pages/About';
import Process from './pages/Process';
import Solutions from './pages/Solutions';
import MissionVision from './pages/MissionVision';

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <MissionStatement />
    <Services />
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/institucional" element={<MissionVision />} />
        <Route path="/processo" element={<Process />} />
        <Route path="/solucoes" element={<Solutions />} />
      </Routes>
      <Footer />
    </Router>
  );
};



export default App;
