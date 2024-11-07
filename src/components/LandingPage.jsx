import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import { FaSearchengin, FaRectangleXmark, FaTiktok, FaWhatsapp, FaChevronDown, FaChevronUp, FaYoutube } from 'react-icons/fa6';
import LaunchPad from "../assets/launchpad.png";
import DigitalMastery from "../assets/digitalmastery.png";
import LegacyBuilder from "../assets/legacybuilder.png";
import PassivePay from "../assets/passsivepay.png";
import emailjs from '@emailjs/browser';
import Head from './Head';

const faqs = [
    {
        question: "What is Digital Marketing?",
        answer: "Digital Marketing is the online promotion and sale of physical or digital products through channels like social media, search engines, and email. In the Legacy Builder Program, digital marketing skills are at the core of building a successful online business. Participants learn how to promote their brand, attract customers, and drive sales. With automated tools provided by the program, members can easily apply these strategies to grow their online business and maximize profits with minimal effort."
    },
    {
        question: "How to start Digital Marketing?",
        answer: "Getting started is easy! Simply choose the income stream that suits your goals on my website, and I will guide you through each step. With the Legacy Builder Program, you will have access to a complete setup, including a website, sales funnel, and marketing system, so you can start promoting and earning right away!"
    },
    {
        question: "What are the income streams in the Legacy Builder Program?",
        answer: "The program offers four income levels—$100, $300, $600, and $900—allowing you to earn 100% profit on each sale. Each level unlocks specific resale rights: purchasing the $100 level gives you the rights to resell only the $100 program, while the $300 level allows you to resell both $300 and $100 programs. Similarly, the $600 level grants resale rights for $600, $300, and $100 programs, and the $900 level provides full resale rights across all income levels. Choose a level that fits your goals, and start earning as you resell the program’s digital marketing services.",
    },
    {
        question: "How can I resell Digital Marketing Programs?",
        answer: "Through the Legacy Builder Program, you can easily resell digital marketing programs and earn 100% profit. The program provides a ready-to-use website, sales funnel, and email system, so you are equipped to promote and sell without needing to create your own materials. Simply choose an income stream, share your business link, and let the automated system handle the rest, making reselling digital marketing programs straightforward and profitable."
    },
    {
        question: "Can I upgrade my income level in the future?",
        answer: "Yes, you can upgrade your income level at any time. When you decide to move to a higher level, you will gain additional resale rights for the new income levels, giving you more opportunities to earn from higher-value sales.",
    },
    {
        question: "Will I need to purchase additional tools or software?",
        answer: "The only additional purchases are for a ready-made website and a custom domain name to establish your online presence. Once set up, the Legacy Builder Program provides all other necessary tools, including a sales funnel and email marketing system, so you can focus on promoting and building your business efficiently.",
    },
    {
        question: "Do I need any experience to join the Legacy Builder Program?",
        answer: "No experience is required! The Legacy Builder Program is designed to be beginner-friendly, offering training and mentorship to help you understand digital marketing, personal branding, and content creation from scratch. You'll learn everything needed to start and grow your online business."
    },
    {
        question: "How much time do I need to invest daily?",
        answer: "The Legacy Builder Program is flexible and can be managed with just 1-2 hours a day. By dedicating this time to posting content and engaging with your audience, you can build a profitable business while the automated systems handle the technical aspects."
    },
];

const LandingPage = () => {

    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const formRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [filteredFAQs, setFilteredFAQs] = useState(faqs);
    const [userName, setUserName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const profileButtonRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
    });

    const scrollToForm = () => {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query.trim() === '') {
            setFilteredFAQs(faqs);
        } else {
            const lowerCaseQuery = query.toLowerCase();
            const filteredResults = faqs.filter(faq =>
                faq.question.toLowerCase().includes(lowerCaseQuery) ||
                faq.answer.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredFAQs(filteredResults);
        }
    };

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => {
        setShowModal(false);
        setIsSignUp(false);
    };

    const handleScroll = () => {
        setIsVisible(window.scrollY > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

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

    const handleProfileToggle = () => {
        setIsProfileOpen((prev) => !prev);
    };

    const handleUserInfo = (user) => {
        setUserInfo(user);
    };

    const handleSubmitQuery = (e) => {
        e.preventDefault();

        const serviceId = 'service_op4uimg';
        const tempateId = 'template_09b0asd';
        const publicKey = 'fg4DOWR8465hqVvjP';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Legacy Lifters',
            message: message,
        };

        emailjs.send(serviceId, tempateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent succesfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Erroe sending email:', error);
            });
    }

    return (
        <div className="landing-page">
             <Head />
            <div className="header">
                <h1 className="website-name">
                    <span className="legacy">Legacy</span>
                    <span className="lifters">Lifters</span>
                </h1>
                <button className="contact-button" onClick={scrollToForm}>Contact Us</button>
                <div className="button-container">
                    <button className="signin-button" onClick={openModal}>
                        {isLoggedIn ? `${userName}` : 'Sign in'}
                    </button>
                    <button onClick={handleProfileToggle} ref={profileButtonRef} className="profile-toggle-button">
                        {isProfileOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>
            </div>

            <div className="book-meeting-container">
                <Link to="/book-meeting" className="book-meeting-button">
                    Book a Meeting
                </Link>
            </div>

            <a href="https://www.youtube.com/@ZeeDigitalHub-h2m" target="_blank" rel="noopener noreferrer">
                <button className="watch-button">Watch Videos</button>
            </a>

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

            <div class="wrapper">
                <div className="outer-container">
                    <div className="content-container">


                        <div className="intro-section">
                            <h2>Welcome to The Legacy Builder Program</h2>
                            <p>
                                Introducing The Legacy Builder Program, brought to you by The Digital Growth Community. Discover the Premier Online Business Community that offers a systematic 6 Figure Blueprint, step-by-step approach to achieving automated daily earnings of $900 (approximately R16,800) per sale!. <b>The Legacy Builder Program</b> is a comprehensive coaching, training, and mentorship program designed to teach digital marketing, social media marketing, and personal branding. Through this program, you’ll gain the skills to build a personal brand, monetize social media, and effectively drive revenue online.
                                <br /><br />
                                Upon joining, you’ll receive a fully automated online business setup, including a website, sales funnel, and email marketing system, all ready for immediate use. The program features four unique income streams at levels of $100, $300, $600, and $900, offering 100% profit on each sale. With just two hours of daily engagement—posting content to generate awareness—your website handles sales and transactions seamlessly, allowing you to focus on expanding your business while enjoying automated earnings. Scroll down to the Q&A section for important information before joining. When you're ready to purchase, click the button below to receive email marketing insights.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="side-container">
                    <h3>Search Content</h3>
                    <div className="search-contact-container">
                        <div className="search-container">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch(searchQuery);
                                    }
                                }}
                            />
                            <FaSearchengin className="search-icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <a href="https://www.zeedigitalhub.com/" target="_blank" rel="noopener noreferrer">
                        <button className="getstarted-button">Get Started with The Legacy Builder Program</button>
                    </a>

                    <div className="income-streams">
                        <h2>Four Income Streams Offered by The Legacy Builder Program</h2>
                        <h4>Choose the course that best suits your needs below. You can upgrade to a higher income stream course at any time.</h4>
                        <div className="income-stream-cards">
                            <div className="income-stream">
                                <img src={LaunchPad} alt="Launch Pad" className="income-stream-image" />
                                <h3>Launch Pad</h3>
                                <h1>$100 USD</h1>
                                <h4>Get full resell right to $100</h4>
                                <p>
                                The Launch Pad course builds foundational skills for starting an online business, covering resale rights and key marketing strategies. With a two-hour daily workflow, it helps members make their first sales quickly.
                                </p>
                                <a href="https://www.zeedigitalhub.com/100launchpad" target="_blank" rel="noopener noreferrer">
                                    <button className="watch-button">Buy $100</button>
                                </a>
                            </div>

                            <div className="income-stream">
                                <img src={PassivePay} alt="Passive Daily Pay Blueprint" className="income-stream-image" />
                                <h3>Passive Daily Pay Blueprint</h3>
                                <h1>$300 USD</h1>
                                <h4>Get full resell right to $100 and $300</h4>
                                <p>
                                The Passive Daily Pay Blueprint focuses on affiliate marketing, guiding participants to build a personal brand, engage profitably on social media, and create consistent, passive income through authentic audience connections.
                                </p>
                                <a href="https://www.zeedigitalhub.com/300blueprint" target="_blank" rel="noopener noreferrer">
                                    <button className="watch-button">Buy $300</button>
                                </a>
                            </div>

                            <div className="income-stream">
                                <img src={DigitalMastery} alt="Digital Mastery" className="income-stream-image" />
                                <h3>Digital Mastery</h3>
                                <h1>$600 USD</h1>
                                <h4>Get full resell to $100, $300, and $600</h4>
                                <p>
                                    Digital Mastery equips participants to scale their affiliate marketing business with advanced productivity, strategic scaling, and effective email marketing, enabling sustainable growth and recurring income.
                                </p>
                                <a href="https://www.zeedigitalhub.com/600digitalmastery" target="_blank" rel="noopener noreferrer">
                                    <button className="watch-button">Buy $600</button>
                                </a>
                            </div>

                            <div className="income-stream">
                                <img src={LegacyBuilder} alt="Complete Legacy Builder Program" className="income-stream-image" />
                                <h3>Legacy Builder Program</h3>
                                <h1>$900 USD</h1>
                                <h4>Get full resell to $100, $300, $600 and $900</h4>
                                <p>
                                    The Complete Legacy Builder Program, at $900, offers a comprehensive online business mastery package, providing tools for creating, marketing, and selling digital products to maximize long-term income and success.
                                </p>
                                <a href="https://www.zeedigitalhub.com/900legacy" target="_blank" rel="noopener noreferrer">
                                    <button className="watch-button">Buy $900</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <div className="faq-section">
                        <h2>Frequently Asked Questions</h2>
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((faq, index) => (
                                <div className={`faq ${openIndex === index ? 'active' : ''}`} key={index}>
                                    <h3 onClick={() => toggleFAQ(index)}>
                                        {faq.question}
                                        <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                                    </h3>
                                    {openIndex === index && <p>{faq.answer}</p>}
                                </div>
                            ))
                        ) : (
                            <p>No results found.</p>
                        )}
                    </div>
                </div>
            </div>


            <div className="outer-container">
                <div className="content-container">
                    <div onSubmit={handleSubmitQuery} ref={formRef} className="email-service">
                        <div className="heading">
                            Get in touch
                        </div>
                        <form className="new-email">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={name}
                                placeholder="Enter your first name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email address"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Enter your message"
                                value={message}
                                rows="4"
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />

                            <button type="submit">Submit</button>
                        </form>
                    </div>
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

export default LandingPage;