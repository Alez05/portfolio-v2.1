'use client'
import { useEffect, useState } from 'react'
import './client-nav.css'
import { TNavProps } from '../nav.type'

const ClientNavbar = ({ navLink = [] }: TNavProps) => {
  const [currentPath, setCurrentPath] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
    }
  }, [])

  return (
    <nav className="client-container">
      {navLink.map((link) =>
        link.path && link.name ? (
          <a
            key={link.path}
            href={link.path}
            className={`client-link ${
              currentPath === link.path ? 'active' : ''
            }`}
          >
            {link.name}
          </a>
        ) : null
      )}
    </nav>
  )
}

export default ClientNavbar
