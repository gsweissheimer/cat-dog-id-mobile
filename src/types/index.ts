import type { UserFull } from './models/UserDTO';

export type { UserFull };
export type AnswerDTO<T> = { data: T } | boolean;