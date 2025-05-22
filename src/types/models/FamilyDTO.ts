import { UserFull } from './UserDTO';

export interface Family {
    id: string;
    name: string;
    users: UserFull[];
}