import React from 'react';
import './NavbarCss.css';
import HamburgerButton from './HamburgerButton';
import LogoComponent from './LogoComponent';

    	
const Navbar = props => (
        <div id="navbar navbar-fixed-top" >
            <div className="container-fluid nav-height bg-color fixed-top"  >
                <div className={props.scroll ? 'row nav-height scrolled' : 'row nav-height'}>

                    <HamburgerButton click={props.drawerClickHandler}/>

                    <LogoComponent />

                    <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-12 nav_right pr-5">
                        <button className="btn btn2 mr-3"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn">Обуки за компании</a></button>
                        <button className="btn btn3 "><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer" className="aBtn"> Вработи наши студенти</a></button>
                    </div>
                </div>
            </div>
        </div>
);

export default Navbar;
