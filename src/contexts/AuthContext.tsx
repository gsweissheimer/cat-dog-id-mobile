import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLogin } from '../services/api';

type AuthContextData = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  signIn(email: string, pass: string): Promise<boolean>;
  signOut(): void;
  getUserIdFromToken(): string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userToken, setUserToken] = useState<string | null>(null);

  const getUserIdFromToken = useCallback(() => {
      if (!userToken) return '';
      console.log(userToken);
      
      const payloadBase64 = userToken.split(".")[1];
      const payloadDecoded = JSON.parse(atob(payloadBase64));
      return payloadDecoded.id;
  }, []);

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
    <AuthContext.Provider value={{ userToken, setUserToken, signIn, signOut, getUserIdFromToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
