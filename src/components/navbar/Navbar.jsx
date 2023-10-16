import './navbar.css';
import { RiMenu3Line , RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import { useState } from 'react';
// BEM -> Block Element Modifier

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wsk">Why Sure kicks?</a></p>
    <p><a href="#CTA">CTA</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='sk__navbar'>
      <div className="sk__navbar-links">
        <div className="sk__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sk__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="sk__navbar-sign">
        <p>Sign in</p>
        <button >Sign Up</button>
      </div>
      <div className='sk__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          :  <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="sk__navbar-menu_container scale-up-center">
            <div className="sk__navbar-menu_container-links">
              <Menu />
              <div className="sk__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar