export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Dummy authentication logic
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // For demo purposes, accept any non-empty username and password
  if (credentials.username && credentials.password) {
    return {
      user: {
        id: '1',
        name: 'Demo User',
        email: credentials.username + '@example.com'
      },
      token: 'dummy-jwt-token-123'
    };
  }
  
  throw new Error('Invalid credentials');
};

export const logout = async (): Promise<void> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  // Clear any stored tokens, etc.
  localStorage.removeItem('authToken');
};

export const getCurrentUser = (): User | null => {
  const token = localStorage.getItem('authToken');
  if (!token) return null;
  
  // In a real app, you'd decode the JWT or make an API call
  return {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com'
  };
};
