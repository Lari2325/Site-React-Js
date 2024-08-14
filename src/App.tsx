import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Footer from './components/Footer';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import { DarkModeProvider } from './context/DarkModeContext';
import styled from 'styled-components';

const Main = styled.main`
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
        <Footer />
        <WhatsAppFloatButton />
      </Router>
    </DarkModeProvider>
  );
};

export default App;