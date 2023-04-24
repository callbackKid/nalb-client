import { Link } from 'react-router-dom'
import { Button } from '../../../components/Button/Button'
import { S } from './Carousel/Carousel'
import './PromoBlock.css'

export const PromoBlock = () => {
  return (
    <div className="promo-block">
      <div className="info">
        <h1 className="slogan">Помогаем животным</h1>
        <p className="description">
          Организовываем и курируем поездки в приют, ветеринарную помощь и поиск дома для 50 собак.
        </p>
        <div className="buttons-container">
          <Link to="/pets">
            <Button design="bright" className="meet-us">
              Познакомиться
            </Button>
          </Link>
          <Link to="donation">
            <Button design="normal">Сделать пожертвование</Button>
          </Link>
        </div>
      </div>
      <div className="carousel-container">
        <S />
      </div>
    </div>
  )
}
