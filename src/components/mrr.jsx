import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTiktok, FaWhatsapp, FaYoutube, FaRegMessage, FaArrowLeft } from 'react-icons/fa6'
import Profile from "../assets/profile.jpeg"

const MRR = () => {
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
                        <h2>An Overview of Master Resale Rights, Private Label Rights, and Resale Rights</h2>
                        <p>Master Resale Rights (MRR), Private Label Rights (PLR), and Resale Rights are powerful tools in the digital product market, allowing individuals to earn income by reselling products. Each offers unique opportunities, from selling products as-is to customizing and branding them as your own, making them versatile options for entrepreneurs. Understanding their distinctions is key to leveraging their potential effectively.</p>
                    </div>
                </div>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <h2>Understanding Master Resale Rights</h2>
                    <p style={{ textAlign: "justify" }}>
                        Master Resale Rights (MRR) are a fantastic way to dive into the digital product business without starting from scratch. When you purchase a product with MRR, you get the right to resell it as it is and even pass those resale rights to your customers. It is like owning a mini business in a box, ready to go.
                        <br /><br />
                        Here is how it works: you buy a product — perhaps an eBook, software, or a course — with MRR, and you can sell it to others at a price you decide. What makes MRR unique is the ability to empower your customers to resell the product too, creating a ripple effect of potential profits. However, there is a key rule to follow: the product must remain as-is. You cannot modify or rebrand it.
                        <br /><br />
                        For entrepreneurs, MRR is a great opportunity to quickly build a business by leveraging quality products that are already created and ready to market. It is ideal for anyone who wants to start earning online but does not have the time or resources to develop their own products from scratch. Plus, with the right marketing strategies, MRR products can become a reliable source of passive income.
                    </p>
                    <h2>Understanding Private Label Rights </h2>
                    <p style={{ textAlign: "justify" }}>
                        Private Label Rights (PLR) offer an incredible level of flexibility for anyone looking to build a digital business. When you purchase a product with PLR, you gain the right to modify, rebrand, and distribute it as your own. This means you can customize the content to align with your brand, update it with your insights, and even bundle it with other products to create something entirely new.
                        <br /><br />
                        For example, if you buy a PLR eBook, you could change the title, add your logo, edit the content, and market it under your name. This level of customization makes PLR products an excellent tool for establishing authority in your niche, building email lists, or even generating a steady income stream by selling a personalized version of the product.
                        <br /><br />
                        However, PLR does require effort to maximize its potential. Since PLR products are often sold to multiple buyers, making your version unique is essential to stand out in the market. With creativity and smart marketing, PLR can be a game-changer for entrepreneurs who want to grow their businesses while saving time and resources on content creation.
                    </p>
                    <h2>Understanding Resale Rights</h2>
                    <p style={{ textAlign: "justify" }}>
                        Resale Rights allow you to purchase a product and resell it to others as-is, without the option to modify or rebrand it. These rights are a straightforward way to start selling digital products without investing time or effort into creating them yourself.
                        <br /><br />
                        With Resale Rights, you act as a distributor of a pre-made product, such as an eBook, software, or online course. You can set your price and keep all the profits from each sale. However, the main limitation is that you cannot make any changes to the product, nor can you claim it as your own creation.
                        <br /><br />
                        This model is ideal for individuals who want a quick and easy way to enter the online marketplace. It’s a low-risk approach for those who prefer to focus on marketing and sales rather than product development. While Resale Rights don’t offer the same level of customization as Private Label Rights, they can still provide a steady source of income with minimal setup. The key is to choose high-quality products that align with your target audience and market them effectively.
                    </p>
                    <h2>Differences Between Resale Rights, Master Resale Rights, and Private Label Rights</h2>
                    <p style={{ textAlign: "justify" }}>
                        Here is a breakdown of the key differences between Resale Rights, Master Resale Rights (MRR), and Private Label Rights (PLR):
                        <br /><br />
                        <strong>1. Resale Rights</strong><br />
                        <ul>
                            <li><strong>What You Can Do:</strong> Resell the product as-is without modification.</li>
                            <li><strong>What You Cannot Do:</strong> Modify, rebrand, or pass on resale rights to your buyers.</li>
                            <li><strong>Target Audience:</strong> Individuals who want a simple way to start selling without product creation or customization.</li>
                            <li><strong>Use Case:</strong> Selling pre-made products like eBooks or software directly to consumers.</li>
                        </ul>
                        <br />
                        <strong>2. Master Resale Rights (MRR)</strong><br />
                        <ul>
                            <li><strong>What You Can Do:</strong> Resell the product and pass on resale rights to your customers.</li>
                            <li><strong>What You Cannot Do:</strong> Modify or rebrand the product.</li>
                            <li><strong>Target Audience:</strong> Entrepreneurs looking to leverage resale chains and build a wider network of buyers.</li>
                            <li><strong>Use Case:</strong> Distributing products with resale rights for others to sell, enabling your customers to also profit.</li>
                        </ul>
                        <br />
                        <strong>3. Private Label Rights (PLR)</strong><br />
                        <ul>
                            <li><strong>What You Can Do:</strong> Modify, rebrand, and distribute the product as your own.</li>
                            <li><strong>What You Cannot Do:</strong> Resell the rights to others in most cases (check the PLR terms).</li>
                            <li><strong>Target Audience:</strong> Individuals who want complete control over the product for branding and marketing.</li>
                            <li><strong>Use Case:</strong> Creating customized products, establishing authority in a niche, and standing out with unique offerings.</li>
                        </ul>
                        <br />
                        <strong>Summary:</strong><br />
                        - <strong>Resale Rights:</strong> Sell as-is, no customization, no rights transfer.<br />
                        - <strong>Master Resale Rights:</strong> Sell as-is and transfer resale rights, no customization.<br />
                        - <strong>Private Label Rights:</strong> Complete control to modify, rebrand, and market as your own.
                    </p>
                </div>
            </div>

            <div className="outer-container">
                <div className="content-container">
                    <h2>The Legacy Builders Program and Master Resell Rights (MRR)</h2>
                    <p style={{ textAlign: "justify" }}>
                        The **Legacy Builders Program** offers a unique opportunity to leverage **Master Resell Rights (MRR)**, enabling entrepreneurs to resell digital products while passing on resale rights to others. This creates an extended earning potential as the resold products can be marketed by both you and your customers. Here is how MRR fits seamlessly into the Legacy Builders Program:
                        <br /><br />
                        <strong>1. How MRR Fits into the Legacy Builders Program</strong><br />
                        The **Legacy Builders Program** equips you with the tools to build a successful online business. By using **MRR**, you gain access to ready-to-sell products, saving you the time and resources required to create your own. You can start selling immediately and scale your business by allowing your customers to resell the same products.
                        <br /><br />
                        <strong>2. Key Benefits of Using MRR in the Legacy Builders Program</strong><br />
                        <ul style={{ textAlign: "justify" }}>
                            <li><strong>Low Risk, High Reward:</strong> Sell pre-created products with minimal risk and the opportunity for high returns by reselling the product to others.</li>
                            <li><strong>Additional Income Streams:</strong> Generate revenue from both direct sales and sales made by your customers who also resell the product.</li>
                            <li><strong>Time-Saving:</strong> Skip the process of product creation and focus on marketing and building your brand.</li>
                            <li><strong>Scalability:</strong> As your customers resell the products, your business can scale effortlessly, creating an ongoing passive income stream.</li>
                        </ul>
                        <br />
                        <strong>3. Building Your Brand with MRR</strong><br />
                        While MRR products cannot be modified, they can still be marketed under your brand. By focusing on strategic marketing efforts and a strong value proposition, you can establish your unique identity and build trust with your audience.
                        Combining the **Legacy Builders Program** with **MRR** gives you a powerful combination of resources and earning potential. Whether you're new to digital marketing or looking to scale your business, these tools work together to support your journey toward financial freedom and online business success.
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

export default MRR;
