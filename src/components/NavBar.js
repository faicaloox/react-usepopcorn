import React, { useState } from 'react'
import Logo from './Logo'

const NavBar = ({children}) => {
  const [query, setQuery] = useState("");

  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  )
}

export default NavBar