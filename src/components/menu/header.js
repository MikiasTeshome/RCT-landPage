import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { header } from 'react-bootstrap';
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);


export default function() {

    const [openMenu, setOpenMenu] = React.useState(false);
    const handleBtnClick = (): void => {
      setOpenMenu(!openMenu);
    };
    const closeMenu = (): void => {
      setOpenMenu(false);
    };
    const ref = useOnclickOutside(() => {
      closeMenu();
    });

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky + 300) {
          header.classList.add("sticky");
          totop.classList.add("show");
          
        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
    <header id="myHeader" className='navbar'>
     <div className='container-fluid'>
       <div className='row m-2-hor w-100-nav'>
          <div className='logo'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                <img
                    src="./img/logo.png"
                    className="img-fluid"
                    alt="#"
                  />
                </NavLink>
              </div>
          </div>
                    
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                    <div className='navbar-item'>
                      <div ref={ref}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick}
                          >
                          Home
                        </div>
                        {openMenu && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu}>
                              <NavLink to="/" onClick={() => btn_icon(!showmenu)}>Main Home</NavLink>
                              <NavLink to="/home1" onClick={() => btn_icon(!showmenu)}>Home Option 1</NavLink>
                              <NavLink to="/home2" onClick={() => btn_icon(!showmenu)}>Home Option 2</NavLink>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/about" onClick={() => btn_icon(!showmenu)}>
                        About Us
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/team" onClick={() => btn_icon(!showmenu)}>
                        Team
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/price" onClick={() => btn_icon(!showmenu)}>
                        Pricing
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/portofolio" onClick={() => btn_icon(!showmenu)}>
                        Portofolio
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>
                        Contact
                      </NavLink>
                    </div>
                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                  <div className='menu'>
                    <div className='navbar-item'>
                        <div ref={ref}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                            Home
                            {openMenu && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu}>
                                <NavLink to="/">Main Home</NavLink>
                                <NavLink to="/home1">Home Option 1</NavLink>
                                <NavLink to="/home2">Home Option 2</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/about">About Us</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/team">Team</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/price">Pricing</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/portofolio">Portofolio</NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/contact">Contact</NavLink>
                    </div>
                  </div>
                </Breakpoint>
              </BreakpointProvider>
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
