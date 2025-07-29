
// import jump from '../../assets/jump.PNG'

import * as Icon from 'react-bootstrap-icons'
import'./header.css';




function Header() {
  return (
    <header className="nav-bar">
        {/* <img src='' alt='logo' /> */}
         <Icon.Flag className='logo' />
        <ul>    
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>

        </ul>
        <div className='search-box'>
            <input type='text' placeholder='search'/>
        </div>

          {/* <Icon.MoonFill className='dark-moon' /> */}

    </header>
  );
}

export default Header;