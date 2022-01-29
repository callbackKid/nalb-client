import { Button } from '../../../components/Button/Button';
import { Carousel } from './Carousel/Carousel';
import './PromoBlock.css';

export const PromoBlock = () => {
  return (
    <div className='promo-block'>
      <div className='info'>
        <h1 className='slogan'>Помогаем животным</h1>
        <p className='description'>
          Организовываем и курируем поездки в приют, ветеринарную помощь и поиск
          дома для 50 собак.
        </p>
        <div className='buttons-container'>
          <Button design='bright' className='meet-us'>
            Познакомиться
          </Button>
          <Button design='normal'>Сделать пожертвование</Button>
        </div>
      </div>
      <div className='carousel-container'>
        <img src='/main-banner.png' />
      </div>
    </div>
  );
};
