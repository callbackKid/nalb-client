import { Link } from 'react-router-dom'
import { Button } from '../../../components/Button/Button'
import { Carousel } from './Carousel/Carousel'
import './PromoBlock.css'

export const PromoBlock = () => {
  return (
    <div className="promo-block">
      <div className="info">
        <h1 className="slogan">Помогаем животным</h1>
        <p className="description">
          Организовываем и курируем поездки в приют, ветеринарную помощь и поиск дома для 20 собак.
        </p>
        <div className="buttons-container">
          <Link to="/pets">
            <Button design="bright" className="meet-us">
              Найти Друга
            </Button>
          </Link>
          <Link to="donation">
            <Button design="normal">Сделать пожертвование</Button>
          </Link>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  )
}
