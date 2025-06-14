import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Plant Haven</h1>
        <p>
          Welcome to Plant Haven, your one-stop destination for beautiful, high-quality houseplants. 
          We carefully select and nurture each plant to ensure they thrive in your home. 
          Our mission is to bring the beauty and benefits of nature indoors, making plant parenthood 
          accessible and enjoyable for everyone, from beginners to experienced plant enthusiasts.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;