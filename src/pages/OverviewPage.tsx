import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

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
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Learning Overview</h1>
            {isAuthenticated && user ? (
              <p className="text-gray-600 mt-1">Welcome back, {user.name}!</p>
            ) : (
              <p className="text-gray-600 mt-1">Track your language learning progress</p>
            )}
          </div>
          <div className="flex gap-3">
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

      <main className="max-w-6xl mx-auto px-6 py-8">
        {isAuthenticated ? (
          <>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Progress</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-700 font-medium mb-1">{stat.label}</div>
                    <div className="text-green-600 text-sm font-medium">{stat.trend}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Activity</h2>
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150">
                    <div className="text-2xl">📝</div>
                    <div className="flex-1">
                      <div className="text-gray-800 font-medium">{activity.action}</div>
                      <div className="text-gray-500 text-sm">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/chatbot" className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 text-center group">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Start Chatting</h3>
                  <p className="text-gray-600">Continue your language practice</p>
                </Link>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 text-center group cursor-pointer">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">View Progress</h3>
                  <p className="text-gray-600">See detailed learning analytics</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 text-center group cursor-pointer">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Set Goals</h3>
                  <p className="text-gray-600">Define your learning objectives</p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Welcome to MicroLang</h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover the power of AI-driven language learning. Our platform offers:
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 text-left">
                  <span className="text-3xl">🤖</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">AI Chatbot Tutor</h3>
                    <p className="text-gray-600">Practice conversations with our intelligent language assistant</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <span className="text-3xl">📈</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Progress Tracking</h3>
                    <p className="text-gray-600">Monitor your learning journey with detailed analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalized Learning</h3>
                    <p className="text-gray-600">Adaptive content that adjusts to your skill level</p>
                  </div>
                </div>
              </div>
              
              <div>
                <Link to="/login" className="btn btn-primary text-lg px-8 py-4">
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
