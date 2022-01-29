import { Pet } from '../../types/Pet';
import { PetCard } from './PetCard/PetCard';
import './PetsGallery.css';

interface PetsGalleryProps {
  pets: Pet[];
}

export const PetsGallery = ({ pets }: PetsGalleryProps) => {
  return (
    <div className='pets-gallery'>
      {pets.map((pet) => (
        <PetCard pet={pet} />
      ))}
    </div>
  );
};
