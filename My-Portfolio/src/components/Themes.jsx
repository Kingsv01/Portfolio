import React, { useEffect, useState } from 'react';
import { themes } from '../data';
import ThemeItem from './ThemeItem';
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon} from 'react-icons/bs';
import './themes.css';

const getStorageColor = () => {
  let color = "hsl(88, 65%, 43%)";
  if (localStorage.getItem('color')){
    color = localStorage.getItem('color');
}

return color;
};

const getStorageTheme = () => {
  let theme = "light__theme";
  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
}

return theme;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

const changeColor = (color) => {
  setColor(color);
};

const toggleTheme = () => {
  if (theme === "light__theme") {
    setTheme("dark__theme");
  }
  else {
    setTheme("light__theme");
  }
};

useEffect(() => {
  document.documentElement.style.setProperty("--first-color", color);
  localStorage.setItem('color', color);
}, [color])

useEffect(() => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme); 
}, [theme]);

  return (
    <div>
      <div className={`${showSwitcher ? 'show__switcher' : ''} style__switcher`}
      >
        <div className='style__switcher-toggler'
        onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog />          
        </div>

        <div className="theme__toggler" onClick={toggleTheme}>
          {theme === "light__theme" ? <BsMoon/> : <BsSun/>}
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} changeColor = {changeColor} />;
          })}
        </div>

        <div className="style__switcher-close"
        onClick={() => setShowSwitcher(!showSwitcher)} 
        >&times;</div>
      </div>
    </div>
  )
}

export default Themes