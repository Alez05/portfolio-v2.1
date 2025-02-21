import ClientNavbar from './[client-nav]/client-nav'
import { TNavProps } from './nav.type'
import navlinkdata from '@data/navlinkdata.json'
import './nav.css'

const Navbar = ({ navLink = [] }: TNavProps) => {
  return (
    <header className="navbar-container">
      <div className="navbar-box">
        <span className="navbar-logo">alexwebdev</span>
        <ClientNavbar navLink={navLink.length > 0 ? navLink : navlinkdata} />
      </div>
    </header>
  )
}

export default Navbar
