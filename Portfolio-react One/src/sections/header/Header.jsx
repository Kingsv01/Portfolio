import HeaderImage from '../assets/header.jpg'
import data from './data'
import './Header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait"/>
        </div>
        <h3>Juli Bintu</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, corrupti cumque? Eaque amet sequi repudiandae.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'> Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
