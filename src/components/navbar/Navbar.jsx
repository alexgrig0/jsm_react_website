import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

//BEM -> block element modifier
const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
      <p><a href="#waxg">What is AXG</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
  </>
)
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className="axg__navbar">
    <div className="axg__navbar-links">
    <div className="axg__navbar-links-logo">
      <img src={logo} alt="logo ">  
      </img>
    </div>
    <div className="axg__navbar-links-container">
      <Menu/>
    </div>
    </div>
    <div className="axg__navbar-sign">
      <p>Sign in</p>
      <button type="button">Sign up</button>
    </div>
    <div className='axg__navbar-menu'>
      {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='axg__navbar-menu-container scale-up-center'>
          <div className='axg__navbar-menu-container-links'>
          <Menu/>
          </div>
          <div className="axg__navbar-menu-container-links-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
          </div>
        </div>
        
      )}
    </div>
    </div>
  )
}

export default Navbar