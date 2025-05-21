import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextData = {
  signedIn: boolean;
  signIn(): void;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  function signIn() {
    setSignedIn(true);
  }

  function signOut() {
    setSignedIn(false);
  }

  return (
    <AuthContext.Provider value={{ signedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
