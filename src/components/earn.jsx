import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTiktok, FaWhatsapp, FaYoutube, FaRegMessage, FaArrowLeft } from 'react-icons/fa6'
import Profile from "../assets/profile.jpeg"

const EARN = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const handleClose = () => {
        navigate('/');
    };

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
                        <h2>Envision the Opportunities</h2>
                        <p style={{ textAlign: "justify" }}>
                            The festive season is more than just a time for celebration and spend time with family — it is a golden opportunity to boost your income and achieve financial goals. Imagine what an extra $900 could do for you: paying off debts, treating loved ones to unforgettable gifts, or simply starting the new year with financial freedom.
                            <br /><br />
                            Think about upgrading your home, funding that dream vacation, or finally launching that business idea you have been passionate about. This season is not just about spending — it is about seizing opportunities to multiply your income and set yourself up for long-term success.
                            <br /><br />
                            With countless ways to earn, from leveraging online platforms to tapping into seasonal trends, you can make this holiday season truly life-changing. It is not just about dreaming big; it is about taking actionable steps to make those dreams come true. The time to act is now — imagine what you could achieve and start building the future you deserve today.
                        </p>
                    </div>
                </div>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <h2>How to Earn in Dollars This Festive Season</h2>
                    <p style={{ textAlign: "justify" }}>
                        As the festive season approaches, the opportunity to make meaningful income while spreading cheer is within your reach. The Legacy Builder Program offers a unique chance to earn in dollars with its innovative model, allowing members to retain 100% of their profits while building a thriving business.

                        <h3>The Power of 100% Profit</h3>

                        When you join the Legacy Builder Program, you gain access to a system that empowers you to earn without middlemen or revenue-sharing schemes. The program is structured to let you keep every dollar of your sales, giving you the financial freedom to maximize your earning potential. Whether it's through selling digital products, offering courses, or leveraging resell rights, your profits are yours to keep.

                        <h3>Leverage Resell Rights for Maximum Earnings</h3>

                        One of the standout features of the Legacy Builder Program is its Master Resell Rights (MRR). With MRR, you not only use the tools and resources provided but also resell them at full price. This means that every sale you make goes directly into your pocket, with no hidden fees or commissions. It’s a powerful way to scale your income, especially during a time when many are looking for online solutions.

                        <h3>Flexible Work, Real Results</h3>

                        The festive season often comes with a busy schedule, but the Legacy Builder Program adapts to your lifestyle. With a proven system and a supportive community, you can work at your own pace, from anywhere, and still see tangible results. This flexibility allows you to focus on building your income without compromising on holiday festivities.

                        <h3>Start Earning Today</h3>

                        Whether you are looking to fund gifts, travel plans, or start saving for the future, the Legacy Builder Program equips you with the tools and strategies to make it happen. Begin your journey now, and make this festive season not only joyful but financially rewarding.
                        <br /><br />

                        <b> This season, take control of your financial destiny and earn in dollars with a program designed to help you succeed.</b>
                    </p>
                </div>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <h2>Build a Business That Fits Your Lifestyle</h2>
                    <p style={{ textAlign: "justify" }}>
                        The Legacy Builder Program offers a flexible framework designed to fit into your life, whether you're a full-time professional, a parent, or someone seeking a side hustle. By following its proven system, you can build a business that aligns with your personal schedule and aspirations, ensuring that your efforts contribute to a sustainable and meaningful income stream.


                        <h3>Turn Dreams Into Reality</h3>

                        Do you dream of financial independence, a debt-free life, or the freedom to travel and spend more time with loved ones? The Legacy Builder Program equips you with actionable tools and strategies to make those dreams achievable. This isn’t about wishful thinking—it’s about taking deliberate steps to create the future you want.


                        <h3>Learn From Industry Experts</h3>

                        One of the program’s key strengths is its mentorship. Legacy Builder connects you with experienced professionals who guide you through every step of the journey. This hands-on support accelerates your growth, helping you avoid common pitfalls and maximize your potential.


                        <h3>Join a Thriving Community</h3>

                        Success is easier when you are surrounded by like-minded individuals who share your goals. The Legacy Builder Program offers access to a community of over 43,000 participants who inspire, support, and share insights to help you stay motivated and on track.


                        <h3>Create Sustainable Income</h3>

                        Unlike schemes promising quick fixes, Legacy Builder focuses on long-term success. By applying its step-by-step approach, participants learn how to generate income that grows steadily over time. This sustainable model ensures your earnings are a result of consistent effort, providing stability and reliability.


                        <h3>Take the First Step Today</h3>

                        The possibilities are endless when you invest in your future. The Legacy Builder Program is more than just a way to make money—it’s an opportunity to transform your life and create a legacy. Envision what’s possible and start your journey today.
                    </p>
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

export default EARN;
