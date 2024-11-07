import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTiktok, FaWhatsapp, FaYoutube, FaChevronUp, FaChevronDown, FaRectangleXmark } from 'react-icons/fa6'
import emailjs from '@emailjs/browser';
import './BookingForm.css';
import Head from './Head';

const BookingForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [meetingType, setMeetingType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
    const [paymentComplete, setPaymentComplete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const handleOptionSelect = (option) => setSelectedOption(option);
    const handleMeetingTypeSelect = (type) => setMeetingType(type);
    const handleUserInfoChange = (e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    const [showModal, setShowModal] = useState(false);
    const profileButtonRef = useRef(null);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const openModal = () => setShowModal(true);
    const closeModal = () => {
        setShowModal(false);
        setIsSignUp(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleProfileToggle = () => {
        setIsProfileOpen((prev) => !prev);
    };

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isSignUp ? '/signup' : '/signin';

        try {
            const response = await fetch(`http://localhost:5000/api${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);

                if (isSignUp) {
                    setUserName(data.user.name);
                } else {
                    setUserName(data.user.name);
                }

                setIsLoggedIn(true);
                handleUserInfo(data.user);
                setFormData({ name: '', surname: '', email: '', password: '' });
                closeModal();
            } else {
                alert(data.error || 'An error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while processing your request');
        }
    };

    const handleUserInfo = (user) => {
        setUserInfo(user);
    };

    const sendEmail = () => {
        setLoading(true);

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

        emailjs.send('service_op4uimg', 'template_uq6tgzh', templateParams, 'fg4DOWR8465hqVvjP')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setPaymentComplete(true);
            })
            .catch((error) => {
                console.error('Failed to send email. Error:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleClose = () => {
        navigate('/');
    };

    return (
        <>
        <Head />
        <div className="landing-page">
            <div className="header">
                <h1 className="website-name">
                    <span className="legacy">Legacy</span>
                    <span className="lifters">Lifters</span>
                </h1>
                <div className="button-container">
                    <button className="signin-button" onClick={openModal}>
                        {isLoggedIn ? `${userName}` : 'Sign in'}
                    </button>
                    <button onClick={handleProfileToggle} ref={profileButtonRef} className="profile-toggle-button">
                        {isProfileOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>
            </div>

            {isProfileOpen && userInfo && (
                <div
                    className="profile-menu"
                    style={{
                        position: 'absolute',
                        top: profileButtonRef.current ? profileButtonRef.current.getBoundingClientRect().bottom + window.scrollY : 0,
                        left: profileButtonRef.current ? profileButtonRef.current.getBoundingClientRect().left - 185 : 0,
                    }}
                >
                    <p>Name: <span className="info-box">{userInfo.name}</span></p>
                    <p>Surname: <span className="info-box">{userInfo.surname}</span></p>
                    <p>Email: <span className="info-box">{userInfo.email}</span></p>
                </div>
            )}

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>
                            <FaRectangleXmark />
                        </button>
                        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                        <form onSubmit={handleSubmit}>
                            {isSignUp && (
                                <>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="surname"
                                        placeholder="Surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        required
                                    />
                                </>
                            )}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="form-button">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                        </form>
                        <p>
                            {isSignUp ? (
                                <>Already have an account? <span className="signup-link" onClick={() => setIsSignUp(false)}>Sign In</span></>
                            ) : (
                                <>Don't have an account? <span className="signup-link" onClick={() => setIsSignUp(true)}>Sign Up</span></>
                            )}
                        </p>
                    </div>
                </div>
            )}


            <div className="outer-container">
                <div className="content-container">
                    <div className="intro-section">
                        <h2>Personalized One-on-One Assistance</h2>
                        <p>Select one of the options below to schedule a personalized one-on-one meeting with me. Whether you need assistance with specific aspects of a course you've purchased, guidance on getting started, or support setting up your tools, I’m here to help. Booking a session provides dedicated time to address your needs, answer your questions, and ensure you have a clear path forward. Secure your slot today, and let’s work together to achieve your goals!</p>
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
                        <button className="option-button" onClick={() => handleOptionSelect('R200')}>R200</button>
                        <p>Don't have the course yet, but need assistance in buying</p>
                        <button className="option-button" onClick={() => handleOptionSelect('R300')}>R300</button>
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
                        <button onClick={prevStep}>Back</button>
                        <button onClick={sendEmail} disabled={!userInfo.name || !userInfo.email || !userInfo.phone}>
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
        </>
    );
};

export default BookingForm;
