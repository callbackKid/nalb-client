import { PetPhoto } from './PetPhoto';

export interface Pet {
  name: string;
  age: number;
  photos: PetPhoto[];
}
