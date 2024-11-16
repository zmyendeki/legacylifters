import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTiktok, FaWhatsapp, FaYoutube, FaRegMessage, FaArrowLeft } from 'react-icons/fa6'
import Profile from "../assets/profile.jpeg"

const LBP = () => {
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
                        <h2>Uncovering the Truth: Is The Legacy Builders Program Legit?</h2>
                        <p style={{ textAlign: "justify" }}>
                            What is the truth behind the “Legacy Builders Program”? Recently, this program has sparked a lot of attention, with some referring to it as a scam. A quick search online reveals various claims, such as:
                        </p>

                        <ul>
                            <li>“It is just another pyramid scheme.”</li>
                            <li>“They only offer content that is available for free elsewhere.”</li>
                            <li>“It is a scam! You are asked to pay anywhere from $100 to $900 upfront.”</li>
                            <li>“Michelle O'Neil(Owner of the Legacy Builders Program) encourages you to use her funnel, which sends all your leads to her.”</li>
                        </ul>

                        <p style={{ textAlign: "justify" }}>
                            But is the Legacy Builders Program genuinely a scam, or is it simply being misunderstood? Let’s dive into the details and uncover the real story behind it. <b>Read Below</b>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <h2>Exploring the Legacy Builders Program</h2>
                    <p style={{ textAlign: "justify" }}>
                        The Legacy Builders Program aims to empower individuals to generate sustainable income online by providing well-organized educational materials, essential tools, and a nurturing community. Unlike typical “get rich quick” schemes, the program focuses on equipping members with long-term income-building strategies. While there is an upfront investment <b>(ranging from $100 to $900 based on the course level)</b>, it offers in-depth resources that extend far beyond basic approaches, helping to challenge some of the negative perceptions surrounding the "Legacy Builder Scam."
                        <h2>Addressing Common Misconceptions About the Legacy Builders Program</h2>

                        <h3>Misconception 1: "It is just another pyramid scheme."</h3>
                        In pyramid schemes, money is made primarily through recruiting new participants, with those at the top reaping the bulk of the rewards. New members often face significant challenges, with limited earning potential due to the structure's focus on early joiners.

                        However, the Legacy Builders Program follows a completely different model. It’s designed to offer real value through a well-organized educational framework, essential tools, and a supportive community aimed at helping participants build independent income streams. Earnings are not tied to recruitment but rather to applying proven strategies for long-term success. The program’s success is determined by how committed members are to learning and implementing the teachings, not by their place in a hierarchy. This allows all members, no matter when they start, to achieve meaningful success.



                        <h3>Misconception 2: "They only provide information you can find for free online."</h3>
                        While free content is abundant online, the Legacy Builders Program offers a unique advantage through its structured curriculum and ongoing support. Rather than spending time sorting through unorganized information, members receive a clear, step-by-step guide, ensuring they don’t miss essential elements or fall into common traps.

                        In addition, Legacy Builders provides mentorship from industry professionals and access to a thriving community of over 43,000 members. This network offers continuous motivation and tailored advice, which many find invaluable in their journey toward success. The combination of a clear path, expert guidance, and community support adds tremendous value to the program, increasing participants’ chances of success.



                        <h3>Misconception 3: "It is a scam! You are asked to pay anywhere from $100 to $900 upfront."</h3>
                        The Legacy Builders Program does have an initial fee, which is standard for courses offering comprehensive training and support. Unlike many free programs that provide little value upfront or charge hidden fees later, Legacy Builder’s one-time fee covers everything: access to a complete suite of tools, resources, and ongoing mentorship. This investment gives members lifetime access to a structured pathway toward long-term success, without worrying about recurring charges.

                        For those serious about building a sustainable income, this upfront cost provides access to all necessary materials and eliminates additional hidden fees. Legacy Builders allows members to focus on learning and implementing strategies without distractions from ongoing payments.



                        <h3>Misconception 4: "Michelle O'Neil (Owner of the Legacy Builders Program) pushes you to use her funnel, which redirects your leads to her."</h3>

                        One common critique of the Legacy Builders Program is that Michelle, the founder, allegedly forces members to use a sales funnel that directs leads to her. Critics suggest this setup benefits her rather than the participants. However, this claim stems from a misunderstanding of how the funnel system works.

                        The funnel is actually a tool designed to educate members about the importance of sales funnels in digital marketing. It is not a method for capturing leads for Michelle, but a learning resource that teaches participants how to build and optimize their own funnels for their businesses. Members retain full control over their leads and customer relationships.

                        Developing a personal sales funnel from scratch can be time-consuming and costly, but Michelle’s proven funnel system is provided at no additional cost. It does not require hosting fees, and it is already been tested with successful results. The only cost involved is a one-time $29 setup fee and the purchase of a domain, which can be obtained from third-party providers like GoDaddy or Namecheap.
                    </p>
                </div>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <h2>Is the Legacy Builders Program a Legitimate Opportunity or a Scam?</h2>
                    <p style={{ textAlign: "justify" }}>
                        While it is natural to approach new opportunities with caution, calling the Legacy Builders Program a "scam" is not fair. The program requires an initial investment, but this fee grants access to valuable educational content, ongoing mentorship, and powerful tools designed to help participants create a sustainable income. Unlike many programs that promise instant wealth, Legacy Builders is rooted in the belief that true financial success comes from consistent effort, learning, and dedication — just like any successful business venture.

                    </p>

                    <p style={{ textAlign: "justify" }}>
                        The income potential in the Legacy Builders Program is not built on unrealistic promises, but on practical, proven strategies. By applying what they’ve learned, members can grow their income in a way that reflects their hard work. This opportunity is founded on the solid principle of scaling up efforts over time, allowing individuals to build knowledge and skills that will lead to gradual, long-term success.

                    </p>

                    <p style={{ textAlign: "justify" }}>
                        For those who are truly committed, Legacy Builders offers a clear path to long-term financial stability and growth, as opposed to the fleeting nature of quick fixes. The program’s focus on genuine income opportunities and sustained development highlights its commitment to helping members achieve lasting success.
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

export default LBP;
