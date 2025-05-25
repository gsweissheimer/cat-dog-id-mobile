import React, { createContext, useContext, useState, ReactNode, use } from 'react';
import { CreateEventService, DeleteEventByIdService, getEventFromPetId, getEventFromTutorId  } from '../services/api';
import { AnswerDTO, Event } from '../types/';

type EventContextData = {
    CreateEvent(event: Event): Promise<boolean>;
    GetEventByPetId(id: string): Promise<boolean>;
    DeleteEventById(id: string): Promise<boolean>;
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
        setEvents((prevEvents) => [...prevEvents, event]);
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

    async function DeleteEventById(id: string): Promise<boolean> {
        const result: AnswerDTO<boolean> = await DeleteEventByIdService(id);
        console.log(result);
        if (typeof result === 'boolean') {
            return false;
        }
        if (result.data) {
            setEvents((prevEvents) => prevEvents.filter(event => event.id !== id));
        }
        return result.data;
    }

    return (
        <EventContext.Provider value={{ events, CreateEvent, GetEventByTutorId, GetEventByPetId, DeleteEventById }}>
            {children}
        </EventContext.Provider>
    );
}

export function useEvent() {
    return useContext(EventContext);
}
