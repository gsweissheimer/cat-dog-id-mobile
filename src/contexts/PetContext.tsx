import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getPetFromId } from '../services/api';
import { AnswerDTO, Pet } from '../types/';

type PetContextData = {
    pet: Pet | null;
    setPet: React.Dispatch<React.SetStateAction<Pet | null>>;
    getPetById(id: string): Promise<boolean>;
};

const PetContext = createContext<PetContextData>({} as PetContextData);

export function PetProvider({ children }: { children: ReactNode }) {
    const [pet, setPet] = useState<Pet | null>(null);

    async function getPetById(id: string): Promise<boolean> {
        const result: AnswerDTO<Pet> = await getPetFromId(id);
        if (typeof result === 'boolean') {
            return false;
        }
        setPet(result.data);
        return true;
    }

    return (
        <PetContext.Provider value={{ pet, setPet, getPetById }}>
            {children}
        </PetContext.Provider>
    );
}

export function usePet() {
    return useContext(PetContext);
}
