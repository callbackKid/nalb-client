import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { FoldableMenu } from './FoldableMenu/FoldableMenu'
import { CgMenuRight } from 'react-icons/cg'

import './Navbar.css'

export const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
  const menuDivRef = useRef<HTMLDivElement>(null)
  const menuContainer = document.querySelector('.links-container') as HTMLDivElement
  const menuBlock = document.querySelector('.links') as HTMLDivElement

  document.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as Element

    if (!menuDivRef.current?.contains(target) ) {
      setIsMenuOpened(false)
     } 
    //  else {
    //   setIsMenuOpened(isMenuOpened ? false : true )
    //  }

  })

  if (isMenuOpened){
      menuBlock?.classList.add('isOpened')
    document.querySelector('.links-container')?.classList.add('isOpened')
  } else {
    menuBlock?.classList.remove('isOpened')
    menuContainer?.classList.remove('isOpened')
  }

  return (
    <nav className="navbar">
     
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className = 'links-container'>
        <FoldableMenu  />
      </div>

      <div className = 'menu-icon'  
        ref = {menuDivRef}
        onClick = {() => setIsMenuOpened(isMenuOpened ? false : true )}
      > 
        <CgMenuRight/>
      </div>
      
    </nav>
  )
}
