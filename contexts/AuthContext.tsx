"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, LoginResponse } from "@/lib/api";
import { getUser, setUser, getAccessToken, setAccessToken, clearAuth } from "@/lib/auth";
import { api } from "@/lib/api";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setAuthData: (loginResponse: LoginResponse) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const setAuthData = (loginResponse: LoginResponse) => {
    setUserState(loginResponse.user);
    setAccessToken(loginResponse.access_token);
    setUser(loginResponse.user);
    localStorage.setItem("refresh_token", loginResponse.refresh_token);
  };

  const signOut = async () => {
    try {
      await api.logout();
    } finally {
      clearAuth();
      setUserState(null);
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      const token = getAccessToken();
      
      if (token) {
        const cachedUser = getUser();
        
        if (cachedUser) {
          setUserState(cachedUser);
          
          try {
            const response = await api.getCurrentUser();
            if (response.success && response.data) {
              setUserState(response.data);
              setUser(response.data);
            } else {
              clearAuth();
              setUserState(null);
            }
          } catch (error) {
            console.error("Error getCurrentUser(): ", error)
            clearAuth();
            setUserState(null);
          }
        }
      }
      
      setLoading(false);
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setAuthData, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
