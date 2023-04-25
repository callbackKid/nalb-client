
import { NavLink } from 'react-router-dom'

import './FoldableMenu.css'

export const FoldableMenu = () => {
  return (
    <>
      <NavLink className="navbar-link" to="/donation">
          Донаты
        </NavLink>
        <NavLink className="navbar-link" to="/pets">
          Подопечные
        </NavLink>
        <NavLink className="navbar-link" to="/help-us">
          Как помочь
        </NavLink>
        <NavLink className="navbar-link" to="/team">
          Наша команда
        </NavLink>
        <NavLink className="navbar-link" to="/contact">
          Контакты
        </NavLink>
        <NavLink className="navbar-link" to="/merch">
          Мерч
        </NavLink>
        <NavLink className="navbar-link" to="/blog">
          Блог
        </NavLink>
    </>
  )
}