import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to MicroLang</h1>
        <p className="landing-subtitle">
          Your intelligent language learning companion
        </p>
      </header>
      
      <main className="landing-main">
        <section className="hero-section">
          <h2>Learn Languages with AI-Powered Conversations</h2>
          <p>
            Experience personalized language learning through interactive 
            chatbot conversations tailored to your skill level.
          </p>
          
          <div className="cta-buttons">
            <Link to="/login" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/overview" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </section>
        
        <section className="features-section">
          <h3>Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>AI Chatbot</h4>
              <p>Practice conversations with our intelligent language tutor</p>
            </div>
            <div className="feature-card">
              <h4>Progress Tracking</h4>
              <p>Monitor your learning journey with detailed analytics</p>
            </div>
            <div className="feature-card">
              <h4>Personalized Learning</h4>
              <p>Adaptive content that adjusts to your learning pace</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
