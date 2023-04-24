import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <div className='links'>
        <NavLink className='navbar-link' to='/donation'>
          Донаты
        </NavLink>
        <NavLink className='navbar-link' to='/pets'>
          Подопечные
        </NavLink>
        <NavLink className='navbar-link' to='/help-us'>
          Как помочь
        </NavLink>
        <NavLink className='navbar-link' to='/team'>
          Наша команда
        </NavLink>
        <NavLink className='navbar-link' to='/contact'>
          Контакты
        </NavLink>
        {/* <NavLink className='navbar-link' to='/merch'>
          мерч
        </NavLink>
        <NavLink className='navbar-link' to='/blog'>
          блог
        </NavLink> */}
      </div>
    </nav>
  );
};
