import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTiktok, FaWhatsapp, FaYoutube, FaArrowLeft, FaRegMessage } from 'react-icons/fa6';
import Profile from "../assets/profile.jpeg";
import emailjs from '@emailjs/browser';
import './BookingForm.css';

const BookingForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');
    const [meetingType, setMeetingType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
    const [paymentComplete, setPaymentComplete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const handleOptionSelect = (option) => setSelectedOption(option);
    const handleMeetingTypeSelect = (type) => setMeetingType(type);
    const handleUserInfoChange = (e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        setIsVisible(window.scrollY > 200);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const sendEmail = async () => {
        setLoading(true);
        setError(''); // Clear any previous errors

        const templateParams = {
            from_name: userInfo.name,
            from_email: userInfo.email,
            to_name: 'Legacy Lifters',
            phone: userInfo.phone,
            selectedOption,
            meetingType,
            date,
            time,
        };

        try {
            const response = await emailjs.send(
                'service_op4uimg', // Replace with your EmailJS service ID
                'template_uq6tgzh', // Replace with your EmailJS template ID
                templateParams,
                'fg4DOWR8465hqVvjP' // Replace with your EmailJS public key
            );
            console.log('Email sent successfully!', response.status, response.text);
            setPaymentComplete(true);
        } catch (err) {
            console.error('Failed to send email:', err);
            setError('An error occurred while submitting your booking. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        if (!userInfo.name || !userInfo.email || !userInfo.phone || !date || !time || !selectedOption || !meetingType) {
            setError('Please complete all fields before submitting.');
            return;
        }
        sendEmail();
    };

    const handleClose = () => navigate('/');

    return (
        <div className="landing-page">
            <div className="header">
                <h1 className="website-name">
                    <span className="legacy">Legacy</span>
                    <span className="lifters">Lifters</span>
                </h1>
                <button className="return-button" onClick={handleClose}>
                    <FaArrowLeft />
                </button>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <div className="intro-section">
                        <h2>Personalized One-on-One Assistance</h2>
                        <p>
                            Select one of the options below to schedule a personalized one-on-one meeting with me. Whether you
                            need assistance with specific aspects of a course you've purchased, guidance on getting started,
                            or support setting up your tools, I’m here to help.
                        </p>
                    </div>
                </div>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <h2>Choose your preferred one-hour meeting option based on your needs.</h2>
                    <div className="booking-form">
                    {step === 1 && (
                            <div>
                                <h2>Select Meeting Option</h2>
                                <p>Bought the course from me already, but need assistance</p>
                                <button className="option-button option-strikethrough" onClick={() => handleOptionSelect('R200')}>
                                    <span className="main-amount">R200</span> <span className="strikethrough-text">R0</span>
                                </button>
                                <p>Don't have the course yet, but need assistance in buying</p>
                                <button className="option-button option-strikethrough" onClick={() => handleOptionSelect('R300')}>
                                    <span className="main-amount">R300</span> <span className="strikethrough-text">R0</span>
                                </button>
                                <p>Bought the course from someone else, but need assistance in setting up</p>
                                <button className="option-button" onClick={() => handleOptionSelect('R500')}>R500</button>
                                <button onClick={nextStep} disabled={!selectedOption}>Next</button>
                            </div>


                        )}
                        {step === 2 && (
                            <div>
                                <h2>Select Meeting Type</h2>
                                <button className="option-button" onClick={() => handleMeetingTypeSelect('Zoom')}>Zoom</button>
                                <button className="option-button" onClick={() => handleMeetingTypeSelect('Teams')}>Teams</button>
                                <button onClick={prevStep}>Back</button>
                                <button onClick={nextStep} disabled={!meetingType}>Next</button>
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <h2>Select Date & Time</h2>
                                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                                <button onClick={prevStep}>Back</button>
                                <button onClick={nextStep} disabled={!date || !time}>Next</button>
                            </div>
                        )}
                        {step === 4 && (
                            <div>
                                <h2>Enter Your Information</h2>
                                <input type="text" name="name" placeholder="Name" onChange={handleUserInfoChange} required />
                                <input type="email" name="email" placeholder="Email" onChange={handleUserInfoChange} required />
                                <input type="tel" name="phone" placeholder="Phone" onChange={handleUserInfoChange} required />
                                {error && <p className="error-message">{error}</p>}
                                <button onClick={prevStep}>Back</button>
                                <button onClick={handleSubmit} disabled={loading}>
                                    {loading ? 'Sending...' : 'Submit'}
                                </button>
                            </div>
                        )}
                         {paymentComplete && (
                            <div>
                                <h2>Booking Confirmed!</h2>
                                <p>Thank you for booking. A confirmation email will be sent shortly.</p>
                                <button onClick={handleClose}>Close</button>
                            </div>
                        )}
                        {loading && !paymentComplete && (
                            <div className="loading">
                                <p>Sending email... Please wait.</p>
                                <div className="loader"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="new-section">
                <img src={Profile} alt="Zandile Myendekim" className="profile-picture" />
                <div className="profile-details">
                    <div className="profile-header">
                        <p className="profile-name">Written by Zandile Myendeki</p>
                        <div className="action-buttons">
                            <a href="https://www.tiktok.com/@zee.digital.hub" target="_blank" rel="noopener noreferrer">
                                <button className="follow-button">Follow</button>
                            </a>
                            <a href="https://wa.me/0633362141" target="_blank" rel="noopener noreferrer">
                                <button className="message-button">
                                    <FaRegMessage />
                                </button>
                            </a>
                        </div>
                    </div>
                    <p className="profile-description">
                        Helping individuals attain financial independence through digital marketing and education. Founder of
                        <a href="https://www.zeedigitalhub.com/" target="_blank" rel="noopener noreferrer"> zeedigitalhub.com</a>
                    </p>
                </div>
            </div>

            {isVisible && (
                <button className="back-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}

            <footer className="footer">
                <p>© 2024 Legacy Lifters. All Rights Reserved.</p>
                <div className="social-links">
                    <a href="https://www.tiktok.com/@zee.digital.hub" target="_blank" rel="noopener noreferrer">
                        <FaTiktok size="2em" className="social-icon" />
                    </a>
                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size="2em" className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com/@ZeeDigitalHub-h2m" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size="2em" className="social-icon" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default BookingForm;
