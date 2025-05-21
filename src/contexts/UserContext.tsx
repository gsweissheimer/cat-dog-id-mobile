import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getUserFullFromUserId } from '../services/api';
import { useAuth } from './AuthContext';
import { AnswerDTO, UserFull } from '../types/';

type UserContextData = {
  userFull: UserFull | null;
  setUserFull: React.Dispatch<React.SetStateAction<UserFull | null>>;
  getUserFull: () => Promise<boolean>;
  userPets: any[];
  setUserPets: React.Dispatch<React.SetStateAction<any[]>>;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userFull, setUserFull] = useState<UserFull | null>(null);
  const [userPets, setUserPets] = useState<any[]>([]);
  const { getUserIdFromToken } = useAuth();

  async function getUserFull(): Promise<boolean> {
    const userId: string = getUserIdFromToken();
    const result: AnswerDTO<UserFull> = await getUserFullFromUserId(userId);
    if (typeof result === 'boolean') {
      return false;
    }
    const petsList = [
        ...(result.data.pets || []),
        ...(result.data.family?.pets || [])
    ];
    console.log('petsList', petsList);
    setUserFull(result.data);
    setUserPets(petsList);
    return true;
  }

  return (
    <UserContext.Provider value={{ userFull, setUserFull, getUserFull: getUserFull, userPets, setUserPets }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
