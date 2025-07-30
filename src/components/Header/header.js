
// import Jump from '../../assets/jump.PNG';
// import { NavLink } from 'react-router-dom';
// import'./header.css';


// const Header = () => {
//   return(
//     <header className="header">
//       <div className="container">
//         <div className="logoWrapper">
//         <img src={Jump} alt='logo' className="logo" />
//         <span className="brandName"> Suumer</span>
//         </div>
      

//       <nav className="nav">

//          <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `navLink${isActive ? ' active' : ''}`
//             }
//           >
//             Home
//           </NavLink>


//            <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `navLink${isActive ? ' active' : ''}`
//             }
//           >
//             About
//           </NavLink>


//            <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `navLink${isActive ? ' active' : ''}`
//             }
//           >
//             Contact
//           </NavLink>
//       </nav>
//      </div>
//     </header>
//   )
// }

// export default Header;





import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './Header.module.css';

import Jump from '../../assets/jump.PNG';
import'./header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logoWrapper">
           <img src={Jump} alt='logo' className="logo" />
          <span className="brandName">MyApp</span>
        </div>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navLink${isActive ? ' active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `navLink${isActive ? ' active' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;