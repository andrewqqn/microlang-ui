import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './OverviewPage.css';

const OverviewPage: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();

  const stats = [
    { label: 'Conversations', value: '24', trend: '+12%' },
    { label: 'Words Learned', value: '156', trend: '+8%' },
    { label: 'Study Streak', value: '7 days', trend: 'New!' },
    { label: 'Languages', value: '2', trend: '+1' }
  ];

  const recentActivity = [
    { action: 'Completed Spanish conversation', time: '2 hours ago' },
    { action: 'Learned 5 new French words', time: '1 day ago' },
    { action: 'Practiced pronunciation', time: '2 days ago' },
    { action: 'Started German basics', time: '3 days ago' }
  ];

  return (
    <div className="overview-page">
      <header className="overview-header">
        <div className="header-content">
          <div className="header-left">
            <h1>Learning Overview</h1>
            {isAuthenticated && user ? (
              <p>Welcome back, {user.name}!</p>
            ) : (
              <p>Track your language learning progress</p>
            )}
          </div>
          <div className="header-actions">
            {isAuthenticated ? (
              <>
                <Link to="/chatbot" className="btn btn-primary">
                  Start Chat
                </Link>
                <button onClick={logout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="overview-main">
        {isAuthenticated ? (
          <>
            <section className="stats-section">
              <h2>Your Progress</h2>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-trend">{stat.trend}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="activity-section">
              <h2>Recent Activity</h2>
              <div className="activity-list">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon">📝</div>
                    <div className="activity-details">
                      <div className="activity-action">{activity.action}</div>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="quick-actions">
              <h2>Quick Actions</h2>
              <div className="actions-grid">
                <Link to="/chatbot" className="action-card">
                  <div className="action-icon">💬</div>
                  <h3>Start Chatting</h3>
                  <p>Continue your language practice</p>
                </Link>
                
                <div className="action-card">
                  <div className="action-icon">📊</div>
                  <h3>View Progress</h3>
                  <p>See detailed learning analytics</p>
                </div>
                
                <div className="action-card">
                  <div className="action-icon">🎯</div>
                  <h3>Set Goals</h3>
                  <p>Define your learning objectives</p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="guest-section">
            <div className="guest-content">
              <h2>Welcome to MicroLang</h2>
              <p>
                Discover the power of AI-driven language learning. Our platform offers:
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">🤖</span>
                  <div>
                    <h3>AI Chatbot Tutor</h3>
                    <p>Practice conversations with our intelligent language assistant</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <span className="feature-icon">📈</span>
                  <div>
                    <h3>Progress Tracking</h3>
                    <p>Monitor your learning journey with detailed analytics</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <div>
                    <h3>Personalized Learning</h3>
                    <p>Adaptive content that adjusts to your skill level</p>
                  </div>
                </div>
              </div>
              
              <div className="guest-actions">
                <Link to="/login" className="btn btn-primary btn-large">
                  Get Started
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default OverviewPage;
