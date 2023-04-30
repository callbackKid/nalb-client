import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { FoldableMenu } from './FoldableMenu/FoldableMenu'
import { CgMenuRight } from 'react-icons/cg'

import './Navbar.css'

export const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)

  return (
    <nav className="navbar">
     
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className = {
          [isMenuOpened ? 'isOpened' : '', 'links-container'].join(' ')
        }
        onClick = {() => setIsMenuOpened(false)}
      >
        <FoldableMenu  isOpened = {isMenuOpened}/>
      </div>

      <div className = 'menu-icon'  
        onClick = {() => setIsMenuOpened(isMenuOpened ? false : true )}
      > 
        <CgMenuRight/>
      </div>
      
    </nav>
  )
}
