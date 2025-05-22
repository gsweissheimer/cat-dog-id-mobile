import { Family } from './FamilyDTO';
import { Pet } from './PetDTO';


export type User = {
  id: string;
}
export type UserFull = {
  id: string;
  name: string;
  email: string;
  tutorId: string;
  pets: Pet[];
  family: Family;
}
