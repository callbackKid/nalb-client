import { YandexMap } from './Map/Map';
import { useState } from 'react';
import Map from './GoogleMap/Map'
import Card from '../../components/Card/Card';
import './ContactPage.css';

export const ContactPage = () => {

  return (
    <div className='contact-page container'>
      <p className='title'>Адрес:</p>
      <p className='description'>
        Москва,
        5112-й Проектируемый пр-д, стр. 1-3   
      </p>
      <p className='title'>Часы работы:</p>
      <p className='description'>
        Понедельник и четверг — выходные дни
      </p>
      <p className='description'>
        Вт, ср, пт, сб, вс — 9:00-17:00
      </p>
      <p className='title'>Как к нам добраться:</p>
      <p className='description'>
        <span>На маршрутке: </span>
        от метро Печатники или Текстильщики идёт маршрутка №438 до 
        остановки «Батюнинский проезд» (конечная). Оттуда 10 минут пешком 
        до нашего приюта. Следуйте прямо до поворота с табличкой "Форвард".
      </p>
      <p className='description'>
        <span>Пешком </span> добраться можно от станции МЦД Перерва(можно пересесть с 
        метро на станции Текстильщики) за 15 минут.
      </p>
      <p className='description'>
        Рядом с приютом есть бесплатная парковка. 
        Если вы используете каршеринг, то возле приюта можно завершить
        аренду только на "Сити Драйв", остальные компании разрешают в этом 
        районе лишь перевод в режим ожидания.
      </p>
      
      {/* <YandexMap /> */}

      <Map />

      
    </div>
  );
};



