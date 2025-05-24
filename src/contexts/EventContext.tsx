import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CreateEventService  } from '../services/api';
import { AnswerDTO, Event } from '../types/';

type EventContextData = {
    CreateEvent(event: Event): Promise<boolean>;
};

const EventContext = createContext<EventContextData>({} as EventContextData);

export function EventProvider({ children }: { children: ReactNode }) {

    async function CreateEvent(event: Event): Promise<boolean> {
        const result: AnswerDTO<boolean> = await CreateEventService(event);
        if (typeof result === 'boolean') {
            return false;
        }
        return result.data;
    }

    return (
        <EventContext.Provider value={{ CreateEvent }}>
            {children}
        </EventContext.Provider>
    );
}

export function useEvent() {
    return useContext(EventContext);
}
