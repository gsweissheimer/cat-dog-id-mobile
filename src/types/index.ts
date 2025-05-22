export * from './models/UserDTO';
export * from './models/FamilyDTO';
export * from './models/PetDTO';
export * from './models/EventDTO';
export type AnswerDTO<T> = { data: T } | boolean;