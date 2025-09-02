import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  console.log('LandingPage component loaded - timestamp:', new Date().toISOString());
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans px-12 py-16">
      
      <main className="flex-1 px-8 py-16 max-w-6xl mx-auto w-full">
        <section className="text-center mb-24 py-12">
          <h2 className="text-5xl mb-10 font-bold text-gray-700 tracking-tight max-w-4xl mx-auto">
            Learn Languages with AI-Powered Conversations
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Experience personalized language learning through interactive 
            chatbot conversations tailored to your skill level.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/login" className="btn btn-primary px-8 py-3">
              Get Started
            </Link>
            <Link to="/overview" className="btn btn-black px-8 py-3">
              Learn More
            </Link>
          </div>
        </section>
        
        <section className="mb-20 px-8">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-700">
            Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-6 text-gray-800">
                AI Chatbot
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Practice conversations with our intelligent language tutor
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-6 text-gray-800">
                Progress Tracking
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Monitor your learning journey with detailed analytics
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-semibold mb-6 text-gray-800">
                Personalized Learning
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Adaptive content that adjusts to your learning pace
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
