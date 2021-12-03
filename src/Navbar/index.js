import React from 'react';
import {
  Nav,
  NavLink,
//   Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        
        <h1 className="logo">RECETA</h1>
        <NavMenu>
        
            
          
          {/* <NavLink to='/profile' activeStyle>
            Profile
          </NavLink> */}
          <NavLink to='/signin' activeStyle>
            Sign In
          </NavLink>
          <NavLink to='/register' activeStyle>
            Register
          </NavLink>
          
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;