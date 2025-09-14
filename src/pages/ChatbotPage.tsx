import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your language learning assistant. What would you like to practice today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Send POST request to the API server
      // const token = localStorage.getItem('authToken');
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = data.message || "Sorry, I couldn't process your message.";

      const botResponse: Message = {
        id: messages.length + 2,
        text: botMessage,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error calling API:', error);
      let errorMessage = "Sorry, I'm having trouble connecting to the server. Please try again later.";
      
      if (error instanceof TypeError && error.message.includes('CORS')) {
        errorMessage = "CORS error: Please check your server configuration for cross-origin requests.";
      }
      
      const errorResponse: Message = {
        id: messages.length + 2,
        text: errorMessage,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleWipeDb = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/wipe_db`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Clear local messages after successful wipe
      setMessages([
        {
          id: 1,
          text: "Hello! I'm your language learning assistant. What would you like to practice today?",
          isUser: false,
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Error wiping database:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Language Chat</h1>
            <span className="text-gray-600">Welcome, {user?.name}</span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleWipeDb} 
              className="px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors duration-200"
            >
              Wipe DB
            </button>
            <button 
              onClick={logout} 
              className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-3 rounded-2xl ${
                message.isUser 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white border border-gray-200 text-gray-800'
              }`}>
                <p className="text-sm sm:text-base leading-relaxed">{message.text}</p>
                <span className={`text-xs mt-2 block ${
                  message.isUser ? 'text-blue-200' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-xs px-4 py-3 rounded-2xl bg-white border border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-200 bg-white p-4 flex-shrink-0">
          <div className="max-w-4xl mx-auto flex gap-3">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[48px] max-h-32"
              rows={1}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="btn btn-primary px-6 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
