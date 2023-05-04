import { YandexMap } from './Map/Map';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ContactPage.css';
import { API_KEY } from '../../api_key';

const noanimalleft = { lat: 55.663350, lng: 37.716761 };
const containerStyle = {
  height: '500px'
}
// function initMap(): void {
//   const noanimalleft = { lat: 55.663350, lng: 37.716761 };
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 15,
//       center: noanimalleft,
//     }
//   );

//   const marker = new google.maps.Marker({
//     position: noanimalleft,
//     map: map,
//   });

//   map.addListener('click', () => {
//     map.
//   }) 
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;

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
      {/* <div id = 'map'></div> */}

      <LoadScript
        googleMapsApiKey = {API_KEY}
      >
        <GoogleMap
          mapContainerStyle = {containerStyle}
          center={noanimalleft}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker position = {noanimalleft}/>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};



