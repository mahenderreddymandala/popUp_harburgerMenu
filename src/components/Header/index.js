// Write your code here
import {withRouter, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => (
  <div className="header">
    <nav className="nav-link">
      <Link to="/" className="link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button type="button" testid="hamburgerIconButton">
            <GiHamburgerMenu className="symbol" />
          </button>
        }
      >
        {close => (
          <>
            <ul className="popup-container">
              <Link to="/" className="link">
                <AiFillHome size="30" className="image" />
                <li className="Home">Home</li>
              </Link>
              <Link to="/about" className="link">
                <BsInfoCircleFill size="30" className="image" />
                <li className="About">About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="trigger-button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </>
        )}
      </Popup>
    </nav>
    <hr />
  </div>
)

export default withRouter(Header)
