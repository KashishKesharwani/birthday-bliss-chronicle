import React, { createContext, useContext, useState, useCallback } from 'react';

export type UserRole = 'admin' | 'doctor' | 'nurse' | 'lab' | 'billing' | 'blood_bank' | 'receptionist';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Demo users for each role
const demoUsers: Record<UserRole, User> = {
  admin: { id: '1', name: 'Dr. Admin', email: 'admin@hospital.com', role: 'admin' },
  doctor: { id: '2', name: 'Dr. Sharma', email: 'doctor@hospital.com', role: 'doctor' },
  nurse: { id: '3', name: 'Nurse Priya', email: 'nurse@hospital.com', role: 'nurse' },
  lab: { id: '4', name: 'Lab Tech Rahul', email: 'lab@hospital.com', role: 'lab' },
  billing: { id: '5', name: 'Billing - Neha', email: 'billing@hospital.com', role: 'billing' },
  blood_bank: { id: '6', name: 'Blood Bank - Amit', email: 'blood@hospital.com', role: 'blood_bank' },
  receptionist: { id: '7', name: 'Receptionist - Sonia', email: 'reception@hospital.com', role: 'receptionist' },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((email: string, password: string, role: UserRole) => {
    // Demo login - any password works
    setUser(demoUsers[role]);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
