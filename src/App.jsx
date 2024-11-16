import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import MMR from './components/mrr';
import LBP from './components/lbplegit';
import EARN from './components/earn';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book-meeting" element={<BookingForm />} />
        <Route path="/mrr" element={<MMR />} />
        <Route path="/lbplegit" element={<LBP />} />
        <Route path="/earn" element={<EARN />} />
      </Routes>
    </Router>
  );
};

export default App;
