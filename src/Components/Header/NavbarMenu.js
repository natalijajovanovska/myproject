import React from 'react';
import {Link} from 'react-router-dom';
import './NavbarMenuCss.css';
import Logo from "./logo.png";

const NavbarMenu = props => {

    let drawerClasses= "container-fluid mySidenav";

    if(props.show){
        drawerClasses = "container-fluid mySidenav open"
    }
    
    return (
        <div className={drawerClasses}>
            <div className="row mt-3 ml-1 mr-1">
                <div className="sideLogo col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6">
                    <Link to="/" onClick={props.click}><img src={Logo} className="sideLogo-img img-fluid" alt="BRAINSTER" /></Link>
                </div>
                <div className="sideLogo col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6 pl-5">
                    <button className="closebtn" ><i className="fas fa-times mr-2" onClick={props.click}></i> Затвори </button>
                </div>    
            </div>
            <div className="sideDrawer">
                
                <Link to="/Register" onClick={props.click}>Регистрирај се</Link>
                <Link to="/LogIn" onClick={props.click}>Најави се</Link>
                <Link to="/AboutUs" onClick={props.click}>За нас</Link>
                <a href="https://www.facebook.com/pg/brainster.co/photos/" target="_blank" rel="noopener noreferrer">Галерија</a>
                <Link to="/Contact" onClick={props.click}>Контакт</Link>
            </div>
        </div>
    );
}

export default NavbarMenu;