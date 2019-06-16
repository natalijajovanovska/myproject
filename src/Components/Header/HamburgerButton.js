import React from 'react';
import './NavbarCss.css';
import './HamburgerCss.css';

const HamburgerButton = props => (
    <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4 col-4 nav_left pull-left pl-5" >
        <button className="hamburger">
            <i className="fas fa-bars " onClick={props.click}></i>
            <span className="caret"></span>
        </button>
        <span className="yellowLetters ml-3 hovMenu">Мени</span>
    </div>
);

export default HamburgerButton;