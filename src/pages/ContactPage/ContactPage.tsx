import { YandexMap } from './Map/Map';
import './ContactPage.css';

export const ContactPage = () => {
  return (
    <div className='contact-page'>
      <p className='description'>
        Вы можете найти нас в Москве по адресу Проектируемый пр., д. 2
      </p>
      <YandexMap />
    </div>
  );
};
