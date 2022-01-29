import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pet } from '../types/Pet';
import { PetsGallery } from './PetsGallery/PetsGallery';
import './PetsPage.css';

export const PetsPage = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  useEffect(() => {
    async function getPets() {
      try {
        const response = await axios.get<Pet[]>('http://localhost:3000/pets');
        const { data } = response;
        setPets(data);
      } catch (e) {
        console.error(e);
      }
    }
    getPets();
  }, [setPets]);
  return (
    <div className='pets-page'>
      <h1 className='title'>Друзья ищут дом</h1>
      <PetsGallery pets={pets} />
    </div>
  );
};
