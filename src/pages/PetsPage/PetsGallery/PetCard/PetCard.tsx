import { Pet } from '../../../../types/Pet'
import './PetCard.css'

interface PetCardProps {
  pet: Pet
}

export const PetCard = ({ pet }: PetCardProps) => {
  const { name, photos } = pet
  const firstPhoto = photos[0]
  return (
    <div className="pet-card">
      {firstPhoto && (
        <img className="pet-photo" src={`http://localhost:3000${firstPhoto.url}`} alt={name} />
      )}
      <div className="pet-name">{name}</div>
    </div>
  )
}
