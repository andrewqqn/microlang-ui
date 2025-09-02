# MicroLang - AI Language Learning Web App

A modern React TypeScript web application for language learning with an AI chatbot tutor.

## Features

- **Landing Page**: Welcome page with feature overview and call-to-action
- **Login Page**: Simple authentication (demo with dummy login)  
- **Chatbot Page**: Interactive AI language tutor for conversation practice
- **Overview Page**: Progress tracking and learning analytics

## Architecture

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v6 with protected routes
- **State Management**: React Context API for authentication
- **Styling**: CSS Modules with custom CSS variables
- **Build Tool**: Vite for fast development and building
- **Backend**: Python virtual environment ready for future API integration

### Project Structure
```
src/
├── components/
│   ├── common/          # Reusable UI components
│   └── layout/          # Layout components (Header, Footer, etc.)
├── contexts/
│   └── AuthContext.tsx  # Authentication state management
├── hooks/
│   └── useAuth.ts       # Custom authentication hook
├── pages/
│   ├── LandingPage.tsx  # Welcome/home page
│   ├── LoginPage.tsx    # User authentication
│   ├── ChatbotPage.tsx  # Main chat interface
│   └── OverviewPage.tsx # Dashboard and progress
├── routes/
│   └── ProtectedRoute.tsx # Route protection logic
├── services/
│   └── authService.ts   # Authentication API calls (dummy)
└── api/                 # Future API integration
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- Python 3.8+ (for backend development)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

3. **Python environment (optional):**
   ```bash
   source venv/bin/activate  # On macOS/Linux
   pip install -r requirements.txt
   ```

### Demo Usage

1. Visit the landing page at `http://localhost:5173/`
2. Click "Get Started" or navigate to `/login`
3. Enter any username and password to log in (dummy authentication)
4. Access the chatbot at `/chatbot` for conversation practice
5. View progress overview at `/overview`

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Features

#### Authentication System
- Context-based state management
- Protected routes with automatic redirects
- Persistent login state using localStorage
- Dummy authentication service for development

#### Routing Architecture  
- Public routes: Landing (`/`), Login (`/login`), Overview (`/overview`)
- Protected routes: Chatbot (`/chatbot`) - requires authentication
- Automatic redirection to intended destination after login

#### Responsive Design
- Mobile-first approach with responsive breakpoints
- CSS custom properties for consistent theming
- Glassmorphism design elements with backdrop filters

#### Chatbot Interface
- Real-time message simulation with typing indicators
- Conversation history with timestamps
- Auto-scrolling message container
- Multi-language conversation starters

## Future Enhancements

### Backend Integration
- Replace dummy authentication with real API
- Add database for conversation history
- Implement real AI/NLP chatbot service
- User progress tracking and analytics

### Additional Features
- Multiple language support
- Voice input/output capabilities
- Lesson plans and structured learning paths  
- Social features and community interactions
- Offline mode capabilities

## Architecture Benefits

### Maintainability
- Clear separation of concerns
- Modular component architecture
- Type safety with TypeScript
- Consistent code organization

### Scalability
- Component-based architecture allows easy feature additions
- Context API scales well for medium-sized applications  
- CSS architecture supports theming and customization
- Ready for backend integration

### Best Practices
- Protected routing for security
- Responsive design principles
- Accessible UI components
- Error boundaries and loading states
- SEO-friendly structure

## Contributing

This is a demo application showcasing modern React development practices. The authentication system uses dummy data for demonstration purposes.

## License

This project is for educational and demonstration purposes.
