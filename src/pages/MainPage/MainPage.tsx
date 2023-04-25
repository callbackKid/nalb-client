import { PromoBlock } from './PromoBlock/PromoBlock';
import './MainPage.css';
import { AboutUs } from './AboutUs/AboutUs';

export const MainPage = () => {
  return (
    <div className='main-page container'>
      <PromoBlock />
      <AboutUs />
    </div>
  );
};
