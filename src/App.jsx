import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/book-meeting" element={<BookingForm />} />
            </Routes>
        </Router>
    );
};

export default App;
