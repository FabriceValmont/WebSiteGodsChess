"use client"
import React, { createContext, useContext, useState } from 'react';

const SessionContext = createContext(false);

export function useSession() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  }

  const logout = () => {
    setIsAuthenticated(false);
  }

  return (
    <SessionContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}
