import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { FoldableMenu } from './FoldableMenu/FoldableMenu'
import { CgMenuRight } from 'react-icons/cg'
import { motion } from 'framer-motion'
import './Navbar.css'


export const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
  const menuDivRef = useRef<HTMLDivElement>(null)

  document.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as Element

    if (!menuDivRef.current?.contains(target) ) {
      setIsMenuOpened(false)
    } else {
      setIsMenuOpened(!isMenuOpened)
    }

  })

  const variants = {
    visible: { display: 'flex', opacity: 1 },
    hidden: { display: 'none', opacity: 0 }
  }

  return (
    <nav className="navbar">
     
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className = 'desktop-menu'>
        <FoldableMenu  />
      </div>

      <motion.div 
        className="links"
        animate = {isMenuOpened ? 'visible' : 'hidden'}
        variants = {variants}
        initial = 'hidden'
        ref = {menuDivRef}
      >
        <FoldableMenu />
      </motion.div>

      <div className = 'menu-icon' ref = {menuDivRef}>
        <CgMenuRight />
      </div>
      
    </nav>
  )
}
