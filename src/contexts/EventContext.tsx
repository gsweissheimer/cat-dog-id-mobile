import React, { createContext, useContext, useState, ReactNode, use } from 'react';
import { CreateEventService, getEventFromPetId, getEventFromTutorId  } from '../services/api';
import { AnswerDTO, Event } from '../types/';

type EventContextData = {
    CreateEvent(event: Event): Promise<boolean>;
    GetEventByPetId(id: string): Promise<boolean>;
    GetEventByTutorId(id: string): Promise<boolean>;
    events: Event[];
};

const EventContext = createContext<EventContextData>({} as EventContextData);

export function EventProvider({ children }: { children: ReactNode }) {

    const [events, setEvents] = useState<Event[]>([]);

    async function CreateEvent(event: Event): Promise<boolean> {
        const result: AnswerDTO<boolean> = await CreateEventService(event);
        if (typeof result === 'boolean') {
            return false;
        }
        return result.data;
    }

    async function GetEventByPetId(id: string): Promise<boolean> {        
        const result: AnswerDTO<Event[]> = await getEventFromPetId(id);
        if (typeof result === 'boolean') {
            return false;
        }
        setEvents(result.data);
        return true;
    }

    async function GetEventByTutorId(id: string): Promise<boolean> {
        const result: AnswerDTO<Event[]> = await getEventFromTutorId(id);
        if (typeof result === 'boolean') {
            return false;
        }
        setEvents(result.data);
        return true;
    }

    return (
        <EventContext.Provider value={{ events, CreateEvent, GetEventByTutorId, GetEventByPetId }}>
            {children}
        </EventContext.Provider>
    );
}

export function useEvent() {
    return useContext(EventContext);
}
