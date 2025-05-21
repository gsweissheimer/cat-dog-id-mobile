import React, { createContext, useContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLogin } from '../services/api';

type AuthContextData = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  signIn(email: string, pass: string): Promise<boolean>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userToken, setUserToken] = useState<string | null>(null);

  async function signIn(email: string, pass: string) {
    const { token } = await postLogin(email, pass);
    if (!token) {
      return false;
    } else {
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
      return true;
    }
  }

  function signOut() {
    setUserToken(null);
  }

  return (
    <AuthContext.Provider value={{ userToken, setUserToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
